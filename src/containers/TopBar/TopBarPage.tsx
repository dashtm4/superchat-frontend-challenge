import React, { useState } from 'react'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { formatNumber } from '@/utils/helpers';
import { CURRENCY_TYPES } from '@/utils/constants';
import { IStatus } from 'src/redux/reducers/types';

import LangEN from '@/assets/images/lang-en.png';
import LangIE from '@/assets/images/lang-ie.png';
import './TopBar.scss';


interface IProps {
  className?: string;
  status: IStatus;
};

function TopBarPage({
  className: wrapperStyle,
  status,
}: IProps) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const {
    balance,
    nextPayout,
    currency,
  } = status;

  const handleSwitchLang = (selectedLang: string) => () => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className={clsx(wrapperStyle, "top-bar--wrapper")}>
      <div className="top-bar--status">
        <div className="top-bar--status-left">
          <div className="top-bar--status-item">
            <div className="label">
              {t('Balance')}
            </div>
            <div className="price">
              {formatNumber(balance)} {CURRENCY_TYPES[(currency as keyof {})]}
            </div>
          </div>
          <div className="top-bar--status-item">
            <div className="label">
              {t('Payout')}
            </div>
            <div className="price">
              {formatNumber(nextPayout)} {CURRENCY_TYPES[currency as keyof {}]}
            </div>
          </div>
        </div>

        <div className="top-bar--status-right">
          <div onClick={handleSwitchLang('en')}>
            <img
              className={lang === 'en' ? 'active' : ''}
              src={LangEN}
              alt="lang-en"
            />
          </div>
          <div onClick={handleSwitchLang('ie')}>
            <img
              className={lang === 'ie' ? 'active' : ''}
              src={LangIE}
              alt="lang-en"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default TopBarPage;
