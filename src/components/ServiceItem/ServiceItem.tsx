import React, { useState, RefObject } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tippy';

import BaseCard from '@/components/BaseCard';
import FormInput from '@/components/FormInput';
import BaseButton from '@/components/BaseButton';
import Clipboard from '@/components/Clipboard';

import 'react-tippy/dist/tippy.css';
import './ServiceItem.scss';

interface IProps {
  activated?: boolean;
  className?: string;
  description: string;
  link: string;
  name: string;
  promoCode: string;

  onActivate: (
    link: string,
    promoCode: string,
  ) => void;
}

function ServiceItem({
  activated,
  className: wrapperStyle,
  description,
  link,
  name,
  promoCode,
  onActivate,
}: IProps) {
  const { t } = useTranslation();
  const [showToolTip, setShowToolTip] = useState(false);

  const handlePrependClick = (ref: RefObject<HTMLInputElement>) => {
    ref?.current?.select();
    document.execCommand('copy');
    setShowToolTip(true);
    setTimeout(() => setShowToolTip(false), 500);
  };

  const handleActivate = () => {
    onActivate(link, promoCode);
  };

  return (
    <BaseCard className={clsx(
      wrapperStyle,
      "service-item--wrapper",
    )}>
      <div>
        <div className="name">
          {name}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="service-item--right">
        {showToolTip}
        <Tooltip
          animation="perspective"
          distance={-16}
          duration={175}
          offset={-24}
          open={showToolTip}
          position="top-end"
          title={t('Copied!')}
          trigger="manual"
        >
          <FormInput
            className="service-item--form-input"
            defaultValue={promoCode}
            label={t('Promocode')}
            onChildrenClick={handlePrependClick}
          >
            <Clipboard className="input--append"/>
          </FormInput>
        </Tooltip>
        <BaseButton
          className="activate--button"
          disabled={activated}
          label={activated ? t('Activated') : t('Activate bonus')}
          onClick={handleActivate}
        />
      </div>
    </BaseCard>
  )
};

export default ServiceItem;
