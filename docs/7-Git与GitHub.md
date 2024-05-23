# 小橙编程学习宝典  

> [!tip]
> ***XiaoCheng Programming Learning Book***
>

## Git

分布式版本控制系统  

### 一、概念

练习网站：<https://learngitbranching.js.org/?locale=zh_CN>

<img src="images/git/三区.png">  

分支使用时常用的名称：  
    - `master` 生产分支  
    - `develop` 开发分支  
    - `feature` 功能分支，从develop分支创建，同期并行开发（新功能），但不同期上线，一般合并到develop分支  
    - `bugFix` 修复分支  
    - `release` 发布分支

### 二、常用命令

#### 1.基础命令

1. `git commit` 提交

2. `git branch`  创建分支  
    创建再多的分支也不会造成储存或内存上的开销  
    `git checkout (-b)` 切换分支(先创建)  
    `git checkout -d` 删除时要做各种检查  
    `git checkout -D` 不做任何检查，直接强制删除
    `git checkout -- fileName` 撤销工作区的修改  

    > [!warn]  
    > 在 Git 2.23 版本中，引入了一个名为 `git switch` 的新命令，最终会取代 `git checkout`，因为 `checkout` 作为单个命令有点超载（它承载了很多独立的功能）。

3. `git merge` 合并分支
4. `git rebase main bugFix` 实际上就是取出一系列的提交记录(bugFix)，“复制”它们，然后在main逐个的放下去，Rebase 的优势就是可以创造更线性的提交历史。
5. 设置用户信息  
    - `git config --global user.name "xiaocheng"` 设置用户名
    - `git config --global user.email "2506919319@qq.com"` 设置邮箱
6. 创建新的 Git 仓库  
    - `git init` 同时会在目录生成.git目录
7. 三个区域之间的变换
    - `git add fileName` 工作区------>暂存区
    - `git commit -m 备注` 暂存区------>本地仓库
    - `git push` 本地仓库------>远程仓库
    - `git status` 查看当前状态
    - `git diff` 查看修改内容
    - `git log` 查看提交记录
      - --all 显示所有分支
      - --graph 显示分支合并图
      - --oneline 显示简洁的提交记录（一行）
      - --abbrev-commit 简短commitId
在 ~/.bashrc中设置过，执行git-log命令即可实现以上效果

#### 2.高级篇

1. `HEAD` 一个指向你正在工作中的本地分支的指针  
   `git checkout`时就指向的即是head  
2. `git log` 来查查看提交记录的哈希值
3. 使用 `^` 向上移动 1 个提交记录，使用 `~<num>` 向上移动多个提交记录
4. `git branch -f main HEAD~3` 强制修改分支位置,使用 `-f` 选项让分支指向另一个提交,上面的命令会将 main 分支强制指向 HEAD 的第 3 级 parent 提交  
5. `git reset` 本地使用，向上移动分支，原来的和没提交一样

    > [!warn]  
    > 注意：`git reset` 命令会改变你本地代码仓库的状态，并且会改变你 HEAD 所指向的提交记录

    `git reset --hard HEAD^（~n）` 回退到上一个版本  
    `git reset --hard 1094ad` 回退到指定版本
6. `git revert HEAD` 远程分支使用，撤销更改并分享给别人，此时是在c3往下创建一个新分支c2'，与c2的状态一样

#### 3.移动提交记录

1. `git cherry-pick c2 c4` 将c2和c4合并到当前分支

    > [!warn]  
    > 注意：`git cherry-pick` 命令会创建一个新提交，这个新提交包含之前提交的修改，并且会引入之前提交的 commit 信息（作者、时间等）变成 c2' c4'

2. `git rebase -i` 交互式rebase，使用UI去拖动提交顺序后，生成一个新的分支带' 的按照你交互完成的顺序

#### 4.杂项

1. 本地栈式提交 `git rebase -i` / `git cherry-pick`  
2. ***Git提交技巧 Ⅰ***：在一个分支已经修改并提交后，又想回来修改这个分支：
    - 先用 `git rebase -i` 将提交重新排序，然后把我们想要修改的提交记录挪到最前
    - 然后用 `git commit --amend` 来进行一些小修改
    - 接着再用 `git rebase -i` 来将他们调回原来的顺序
    - 最后 `git branch -f main HEAD` 我们把 main 移到修改的最前端
3. ***Git提交技巧 Ⅱ***：使用cherry-pick 可以将提交树上任何地方的提交记录取过来追加到 HEAD 上

    - `git checkout main` 先切换到main再创建新分支
    - `git-cherry-pick c2` 基于c2创建
    - `git commit --amend` 提交修改
    - `git-cherry-pick c3` 把c3再移过来
4. Git标签 `git tag v1 c1` 在c1加一个标签v1
5. Git锚点 `git describe<ref>`  
    &emsp;&emsp;在提交历史中移动了多次以后找到方向；当用 git bisect（一个查找产生 Bug 的提交记录的指令）找到某个提交记录  
    `<tag>_<numCommits>_g<hash>`
    &emsp;&emsp;tag 表示的是离 ref 最近的标签， numCommits 是表示这个 ref 与 tag 相差有多少个提交记录， hash 表示的是你所给定的 ref 所表示的提交记录哈希值的前几位。

### 三、远程分支

1. 远程仓库创建 `git clone` 克隆后会生成一个远程分支origin,切换到远程分支且本地提交后Git 变成了分离 HEAD 状态，当添加新的提交时 o/main 也不会更新。因为 o/main 只有在远程仓库中相应的分支更新了以后才会更新。
2. `git fetch` 从远程仓库获取数据，但并不会改变你本地仓库的状态。它不会更新你的 main 分支，也不会修改你磁盘上的文件。（可以理解为单纯的下载操作）
3. `git pull` 拉取， git fetch 和 git merge 的缩写  
    `git pull --rebase` 就是 fetch 和 rebase 的简写  
4. `git push` 推送  
    `git push feature main` 将本地feature分支推送到main分支下
5. `git branch -vv` 查看本地和远程分支之间关联联系

### 四、Git 远程仓库高级操作

1. `git remote add origin` 添加远程仓库  
2. `git remote` 查看
3. `git remote rm origin` 删除

4. ***rebase的优缺点***  
    优点:  
    Rebase 使你的提交树变得很干净, 所有的提交都在一条线上  

    缺点:  
    Rebase 修改了提交树的历史  
    比如, 提交 C1 可以被 rebase 到 C3 之后。这看起来 C1 中的工作是在 C3 之后进行的，但实际上是在 C3 之前。  

5. ***main与o/main的关系***
    - pull 操作时, 提交记录会被先下载到 o/main 上，之后再合并到本地的 main 分支。隐含的合并目标由这个关联确定的。  
    - push 操作时, 我们把工作从 main 推到远程仓库中的 main 分支(同时会更新远程分支 o/main) 。这个推送的目的地也是由这种关联确定的！

6. ***设置远程追踪分支***  
    - `git checkout -b foo o/main; git pull / push`  

    - 设置远程追踪分支的方法就是使用：git branch -u 命令，执行：  
    `git branch -u o/main foo`  

    - 这样 foo 就会跟踪 o/main 了。如果当前就在 foo 分支上, 还可以省略 foo：  
    `git branch -u o/main`  

7. ***git push的参数***
    `git push origin main`  
    切到本地仓库中的“main”分支，获取所有的提交，再到远程仓库“origin”中找到“main”分支，将远程仓库中没有的提交记录都添加上去，搞定之后告诉我。

8. ***没有source的source***
    `git push origin :foo`  
    由于推送的是空，所以删除远程仓库的foo分支  
    `git fetch origin :bar`  
    会创建一个新的分支
