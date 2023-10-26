import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import { Quasar } from "quasar";

export default ({ app }) => {
  const i18n = createI18n({
    locale: Quasar.lang.getLocale(),
    messages,
  });
  app.use(i18n);
};
