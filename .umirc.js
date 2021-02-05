// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/success',
      component: '../pages/success',
    },
    {
      path: '/download',
      component: '../pages/download',
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  hash: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: '悉息掌控',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        locale: {
          default: 'zh-CN',
        },
      },
    ],
  ],
};
