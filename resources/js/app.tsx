import './bootstrap';
import '../css/app.css';

// Imports do Gov
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@govbr-ds/core/dist/core.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@govbr-ds/core/dist/core.min.css";


import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import Layout from './Layouts/Layout';
import topbar from 'topbar';

topbar.config({
    barColors: {0: '#071d41'}
})

// REDUX
// import { Provider } from 'react-redux';
// import { store } from './store';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
        <Layout>
            <App {...props} />
        </Layout>
    );
    },
    progress: {
        color: '#4B5563',
    },
});
