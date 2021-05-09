import './App.css';
import React from 'react';
import { useTranslation} from 'react-i18next';


function Bio() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="bio">
       <div className="descripcion">
       {t("bio.descripcion")}
       </div>
       <div className="descripcion">
        {t("bio.descripcion")}
        </div>
    </div>
  );
}

export default Bio;
