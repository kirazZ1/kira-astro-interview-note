// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight'; 
import starlightThemeRapide from 'starlight-theme-rapide'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        plugins: [
            starlightThemeRapide(/* options */),
        ],
        title: 'kira的面试笔记',
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        locales: {

            root: {
                label: '简体中文',
                lang: 'zh-CN',
            },
        },
        lastUpdated: true,
        sidebar: [
            {
                label: 'JavaScript',
                autogenerate: { directory: 'javaScript' },
            },

        ],
    }), mdx()],
    // i18n: {
    //     defaultLocale: 'zh-cn',
    //     locales: ["zh-cn"],
    // },
});