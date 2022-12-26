import React from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/translate';
import { changeLanguage } from "i18next";

function ChangeLanguageButton() {

  const changeLanguageAction = (lang) => {
    const dropdown = document.querySelector('.changeLanguageBox');
    dropdown.classList.add('disabled-language-box');
    changeLanguage("fr");
  };


  const [isOpen, setIsOpen] = React.useState(false);
  const button = React.useRef(null);
  React.useEffect(() => window.addEventListener('click', ev => {
    if(button.current && button.current.contains(ev.target)) {setIsOpen(!isOpen)}
    else {setIsOpen(false)}
  }), []);

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: `
          .toggleLanguageButton {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: none;
            color: var(--main-text-color);
            cursor: pointer;
          }
          .changeLanguageBox {
            display: flex;
            position: absolute;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            margin-left: -28px;
            background-color: var(--accent-bg-color);
            color: var(--main-text-color);
            border-radius: 5px;
            padding: 5px;
            opacity: 1;
            transition: all 0.1s ease-in-out;
          }
          .language-button {
            background-color: var(--main-background-color);
            color: var(--main-text-color);
            border: none;
            font-size: 1rem;
            padding: 0.2rem;
            font-family: 'Roboto Mono', sans-serif;
            cursor: pointer;
          }
          .disabled-language-box {
            opacity: 0;
            pointer-events: none;
          }
        ` }} />
      <button className="toggleLanguageButton" ref={button}>
        <Icon icon={menuIcon} style={{ order: 1, fontSize: 30 }} />
      </button>
      <div className={"changeLanguageBox " + (isOpen ? '' : 'disabled-language-box')}>
        <button onClick={() => changeLanguageAction("fr")} className="language-button">Français</button>
        <button onClick={() => changeLanguageAction("en")} className="language-button">English</button>
      </div>
      
    </div>
  );
}

export default ChangeLanguageButton;
