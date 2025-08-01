import { defineConfig } from 'dumi';
import path from 'path';

let base: string | undefined;
let publicPath: string | undefined;

// Github Pages 部署时需要更换为自己的仓库名
if (process.env.NODE_ENV === 'production' && process.env.PREVIEW !== '1') {
  base = '/react-ui-library-tutorial-master/';
  publicPath = '/react-ui-library-tutorial-master/';
}

console.log('Base:', base);
console.log('Public Path:', publicPath);

export default defineConfig({
  base,
  publicPath,
  title: 'chat-ui',
  outputPath: 'doc-site',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  exportStatic: {},
  forkTSChecker: {},
  themeConfig: {
    editLink: false,
    name: 'chatui',
    logo: 'https://avatars.githubusercontent.com/u/97723502?v=4'
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@liyanyan123/chat-ui',
        libraryDirectory: '',
        customStyleName: (name: string) => path.resolve(__dirname, `src/${name}/style/index.ts`),
      },
    ],
  ],
});
