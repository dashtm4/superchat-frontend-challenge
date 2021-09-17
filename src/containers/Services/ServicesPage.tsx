import React from 'react';
import { useTranslation } from 'react-i18next';

import BaseButton from '@/components/BaseButton';
import FormInput from '@/components/FormInput';
import ServiceItem from '@/components/ServiceItem';
import { IService } from 'src/redux/reducers/types';

import './Services.scss';

interface IProps {
  filteredServices: IService[];
  searchWord: string | undefined;

  handleUpdateSearchWord: (
    searchWord: string,
  ) => void;
  handleActivate: (
    link: string,
    promoCode: string,
  ) => void;
}

function ServicesPage({
  filteredServices,
  searchWord,
  handleUpdateSearchWord,
  handleActivate,
}: IProps) {
  const { t } = useTranslation();

  const handleReset = () => {
    handleUpdateSearchWord('');
  };

  return (
    <section className="services--wrapper">
      <div className="title">
        {t('Services')}
      </div>
      <div className="services--action">
        <FormInput
          className="services--form-input"
          label={t('Filter')}
          placeholder={t('Filter services...')}
          value={searchWord}
          onChange={handleUpdateSearchWord}
        />
        <BaseButton
          className="reset--button"
          label={t('Reset')}
          variant="outlined"
          onClick={handleReset}
        />
      </div>
      {filteredServices.map((
        service: IService,
        serviceIndex: number,
      ) =>
        <ServiceItem
          activated={service.activated || false}
          className="services--item"
          description={service.description}
          key={serviceIndex}
          link={service.link}
          name={service.title}
          promoCode={service.promocode}
          onActivate={handleActivate}
        />
      )}
    </section>
  )
};

export default ServicesPage;
