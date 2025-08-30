// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import mdx from '@astrojs/mdx';
import starlightImageZoom from 'starlight-image-zoom'
import starlightScrollToTop from 'starlight-scroll-to-top';
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";




// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        plugins: [
            starlightThemeRapide(),
            starlightImageZoom(),
            starlightScrollToTop(),
            viewTransitions()
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
            {
                label: 'Vue',
                autogenerate: { directory: 'vue' },
            },
            {
                label: 'React',
                autogenerate: { directory: 'react' },
            },

        ],
    }), mdx()],
});