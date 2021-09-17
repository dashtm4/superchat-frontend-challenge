import React from 'react'
import { connect, ConnectedProps } from 'react-redux';

import { getStatus } from '@/selectors';
import { IRootState } from 'src/redux/reducers/types';

import TopBarPage from './TopBarPage';

type TProps = ConnectedProps<typeof connector>;

function TopBar({ status }: TProps) {
  return (
    <TopBarPage status={status} />
  )
};

const mapStateToProps = (state: IRootState) => ({
  status: getStatus(state),
});

const connector = connect(mapStateToProps, null);

export default connector(TopBar);
