[🚀 在线预览](https://liyanyan123456.github.io/react-ui-library-tutorial-master)

🚆 本地预览

```bash
nvm use 16
pnpm install
pnpm start
```

🚆 发布 npm 包

```bash
npm login
npm publish
```

按顺序执行完命令后，即可在 localhost:3000 端口看到

## 概览

本系列文章主要包含以下内容：

- 项目初始化: 组件库前期开发准备工作。`eslint`/`commit lint`/`typescript`等等；
- 开发阶段: 使用 [dumi](https://d.umijs.org/zh-CN) 进行开发调试以及文档编写；
- 打包阶段: 输出~~`umd`~~/`cjs`/`esm`产物并支持按需加载；
- 组件测试: 使用`@testing-library/react`及其相关生态进行组件测试；
- 发布 npm: 编写脚本完成发布或直接使用 [np](https://www.npmjs.com/package/np) 发布；
- 部署文档站点: 使用 Github Pages 以及 Github Actions 完成文档站点自动部署。
