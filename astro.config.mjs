// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import mdx from '@astrojs/mdx';
import starlightImageZoom from 'starlight-image-zoom'
import starlightScrollToTop from 'starlight-scroll-to-top';
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightSidebarTopics from 'starlight-sidebar-topics'
import path from 'path';
import { fileURLToPath } from 'url';
import sideBarConfig from './src/config/sideBar'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const sideBarFilePath = path.resolve(__dirname, './src/components/SideBar.astro');

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        plugins: [
            starlightThemeRapide(),
            starlightImageZoom(),
            starlightScrollToTop(),
            viewTransitions(),
            starlightSidebarTopics(sideBarConfig)
        ],
        components: {
            Sidebar: sideBarFilePath,
        },
        title: 'kira的面试笔记',
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        locales: {

            root: {
                label: '简体中文',
                lang: 'zh-CN',
            },
        },
        lastUpdated: true,
    }), mdx()],
});