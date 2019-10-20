import React from "react";
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, setActiveLanguage }) => (
    <ul className="lang-list">
        {languages.map(lang => (
            <li key={lang.code} className='lang-item'>
                <button className={`lang-button ${lang.name}`} onClick={() => setActiveLanguage(lang.code)}>
                    {lang.name}
                </button>
            </li>
        ))}
    </ul>
);

export default withLocalize(LanguageToggle);
