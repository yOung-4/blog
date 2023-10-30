import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import { LocalStorage } from "quasar";
import { Quasar } from "quasar";

var language = LocalStorage.has("language")
  ? LocalStorage.getItem("language")
  : Quasar.lang.getLocale();

export default ({ app }) => {
  const i18n = createI18n({
    locale: language,
    messages,
  });
  app.use(i18n);
};
