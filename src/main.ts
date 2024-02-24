import { createSSRApp } from 'vue';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import App from './App.vue';
import router from './router';

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App);

  app.use(router);

  i18next.init({
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hello: 'hello world',
          foo: 'bar',
        },
      },
    },
  });

  app.use(I18NextVue, { i18next });

  return { app, router };
}
