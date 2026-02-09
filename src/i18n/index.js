import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import th from "./th.json"
import en from "./en.json"

i18n
    .use(initReactI18next)
    .init(
        {
            resources: {
                en: { translation: en },
                ไทย: { translation: th }
            },
            lng: "ไทย",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false,
            },
        }
    )

export { i18n }