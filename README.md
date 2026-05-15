# 杨佳豪个人主页

这是一个用于 GitHub Pages 部署的静态个人学术主页，内容包括个人概况、教育背景、科研方向、科研与项目经历、竞赛获奖和联系方式。

项目使用纯 HTML、CSS 和少量原生 JavaScript，不依赖 React、Vue、Vite、Tailwind、Bootstrap 或 npm 构建流程。

## 目录结构

```text
.
|-- index.html
|-- README.md
`-- assets
    |-- css
    |   `-- style.css
    |-- js
    |   `-- main.js
    `-- images
        |-- .gitkeep
        |-- my_photo.png
        `-- profile-placeholder.svg
```

## 本地预览

可以直接用浏览器打开 `index.html`。

也可以在项目根目录启动一个简单静态服务器：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## GitHub Pages 部署

1. 仓库名使用 `Seeeeeeeeeeeea.github.io`。
2. 将代码推送到 `main` 分支。
3. 进入 GitHub 仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. 保存后等待 GitHub Pages 自动部署。

部署后访问：

```text
https://seeeeeeeeeeea.github.io
```

## 后续可修改位置

- `index.html`：修改个人简介、教育背景、科研经历、竞赛获奖和联系方式。
- `assets/images/my_photo.png`：替换个人照片。
- `assets/css/style.css`：调整颜色、字体、间距、卡片和响应式布局。
- `assets/js/main.js`：移动端导航菜单和平滑滚动逻辑。

## 说明

- 当前页面可以直接由 GitHub Pages 部署。
- 所有样式变量集中在 `assets/css/style.css` 的 `:root` 中，方便后续统一调整。
- 页面没有构建步骤，也不需要执行 `npm install`。
