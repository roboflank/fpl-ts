module.exports = {
  title: 'FPL TS',
  tagline: 'JS/TS wrapper for FPL API',
  url: 'https://wamburu.github.io',
  baseUrl: '/fpl-ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wamburu', // Usually your GitHub org/user name.
  projectName: 'fpl-ts', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/shadesOfPurple'),
    },
    navbar: {
      title: 'fpl-ts',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Intro',
          position: 'left',
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'examples/',
          activeBasePath: 'examples',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/wamburu/fpl-ts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/wamburu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wamburu/fpl-ts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FPL-TS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wamburu/fpl-ts/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts', '../src/types/index.ts'],
        tsconfig: '../tsconfig.json',
        docsRoot: 'docs',
        out: 'api',
        sidebar: {
          sidebarFile: 'typedoc-sidebar.js',
          fullNames: false,
          readmeLabel: 'Overview',
        },
      },
    ],
  ],
}
