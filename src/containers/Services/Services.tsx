import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getServices } from '@/selectors';
import { fetchServices, activatePromoCode } from '@/redux/actions';
import { IService, IRootState } from 'src/redux/reducers/types';

import ServicesPage from './ServicesPage';

type TProps =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

function Services({
  services,
  activatePromoCode,
  fetchServices,
}: TProps) {
  const [filteredServices, setFilteredServices] = useState<IService[]>([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    setFilteredServices(
      services.filter((service: IService) => (
        service.title
          .toLowerCase()
          .includes((searchWord || '').toLowerCase())
    )));
  }, [services, searchWord]);

  const handleUpdateSearchWord = (newSearchWord: string) => {
    setSearchWord(newSearchWord);
  };

  const handleActivate = (
    link: string,
    promoCode: string,
  ) => {
    activatePromoCode({
      link,
      promoCode,
    });
  };
  return (
    <ServicesPage
      filteredServices={filteredServices}
      handleActivate={handleActivate}
      handleUpdateSearchWord={handleUpdateSearchWord}
      searchWord={searchWord}
    />
  )
};

const mapStateToProps = (state: IRootState) => ({
  services: getServices(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      activatePromoCode,
      fetchServices,
    },
    dispatch,
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
