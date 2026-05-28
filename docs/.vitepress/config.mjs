export default {
  title: "李雨墨",
  description: "北京20K前端成长路线",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "JS底层", link: "/JS/this" },
      { text: "Vue体系", link: "/Vue/reactivity" },
      { text: "React体系", link: "/React/hooks" },
      { text: "工程化", link: "/Engineering/vite" },
      { text: "项目复盘", link: "/Projects/mars3d" },
      { text: "性能优化", link: "/Performance/cache" },
      { text: "技术方案", link: "/Architecture/auth" },
      { text: "面试题", link: "/Interview/javascript" },
    ],

    sidebar: {
      "/JS/": [
        {
          text: "JS底层",
          items: [
            { text: "this指向", link: "/JS/this" },
            { text: "闭包", link: "/JS/closure" },
            { text: "Promise", link: "/JS/promise" },
            { text: "EventLoop", link: "/JS/eventloop" },
          ],
        },
      ],

      "/Vue/": [
        {
          text: "Vue体系",
          items: [
            { text: "响应式原理", link: "/Vue/reactivity" },
            { text: "Diff算法", link: "/Vue/diff" },
            { text: "生命周期", link: "/Vue/lifecycle" },
          ],
        },
      ],

      "/React/": [
        {
          text: "React体系",
          items: [
            { text: "Hooks", link: "/React/hooks" },
            { text: "Fiber", link: "/React/fiber" },
            { text: "Redux", link: "/React/redux" },
          ],
        },
      ],

      "/Engineering/": [
        {
          text: "工程化",
          items: [
            { text: "Vite", link: "/Engineering/vite" },
            { text: "Webpack", link: "/Engineering/webpack" },
            { text: "CI/CD", link: "/Engineering/cicd" },
          ],
        },
      ],

      "/Projects/": [
        {
          text: "项目复盘",
          items: [
            { text: "Mars3D项目", link: "/Projects/mars3d" },
            { text: "智慧园区", link: "/Projects/park" },
          ],
        },
      ],

      "/Performance/": [
        {
          text: "性能优化",
          items: [
            { text: "缓存策略", link: "/Performance/cache" },
            { text: "大屏优化", link: "/Performance/bigscreen" },
          ],
        },
      ],

      "/Architecture/": [
        {
          text: "技术方案",
          items: [
            { text: "权限系统", link: "/Architecture/auth" },
            { text: "埋点方案", link: "/Architecture/tracking" },
          ],
        },
      ],

      "/Interview/": [
        {
          text: "面试题",
          items: [
            { text: "JS面试题", link: "/Interview/javascript" },
            { text: "Vue面试题", link: "/Interview/vue" },
            { text: "React面试题", link: "/Interview/react" },
          ],
        },
      ],
    },
  },
};
