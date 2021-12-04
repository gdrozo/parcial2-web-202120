import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  return (
    <select onChange={(e) => setLanguage(e.target.value)}> 
      <option  value={LOCALES.SPANISH}>Spanish</option>
      <option  value={LOCALES.ENGLISH}>English</option>
    </select>
  );
};
