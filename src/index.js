import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { I18nextProvider, initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    interpolation: { escapeValue: false},
    // lng: "en",
    
    resources: {
        es: { global: global_es},
        en: { global: global_en}
    },
    
})

ReactDOM.render(
   <I18nextProvider i18n={i18next}>
       <SimpleReactLightbox>
        <App/>
       </SimpleReactLightbox>
    </I18nextProvider>,
    document.getElementById('root')
);


