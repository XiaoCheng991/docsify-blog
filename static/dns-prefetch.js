const fs = require('fs');
    const path = require('path');
    const { parse } = require('node-html-parse');
    const { glob } = require('glob');
    const urlRegex = require('url-regex');

    // 获取外部链接的正则表达式
    const urlPattern = /(https?:\/\/[^/]*)/i;
    const urls = new Set();
    // 遍历dist目录中的所有HTML、CSS、JS文件
    async function searchDomain() {
        const files = await glob('dist/**/*.{html,css,js}');
        for(const file of files) {
            const source = fs.readFileSync(file, 'utf-8');
            const matches = source.match(urlRegex({ strict: true }));
            if(matches) {
                matches.forEach((url) => {
                    const match = url.match(urlPattern);
                    if (match && match[1]) {
                        urls.add(match[1]);
                    }})}}}

    // 异步函数读取域名，将link标签加到打包结果的head元素中去
    async function insertLinks() {
        const files = await glob('dist/**/*.html');
        const links = [...urls]
          .map((url) => `<link rel="dns-prefetch" href="${url}" />`)
          .join('\n');
        
        for (const file of files) {
            const html = fs.readFileSync(file, 'utf-8');
            const root = parse(html);
            const head = root.queryselector('head');
            head.insertAdjacentHtml('afterbegin', links);
            fs.writeFileSync(file, root.toString());
        }
    }

    async function main() {
        await searchDomain();
        // 在 <head>标签中添加预取链接
        await insertLinks();
    }

    main();