import BaseLayout from '@/components/layout/BaseLayout.vue';
import SystemLogo from '@/components/system-logo/SystemLogo.vue';
import 'virtual:uno.css';

export * from '@/components/hooks/hooks';
export { BaseLayout, SystemLogo };
const MyComponentLibrary = {
  install: (app) => {
    app.component('BaseLayout', BaseLayout);
    app.component('SystemLogo', SystemLogo);
  },
};

export default MyComponentLibrary;
