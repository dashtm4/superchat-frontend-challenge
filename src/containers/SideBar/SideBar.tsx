import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import Logo from '@/components/Logo';
import { PATHS } from '@/utils/constants';

import { sidebarItems } from './constants';
import { ISidebarItem } from './types';
import './SideBar.scss';

interface IProps {
  className?: string;
}

function SideBar({
  className: wrapperStyle,
}: IProps) {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('SERVICES');

  const handleRouting = (selectedLink: string) => () => {
    setSelectedSidebarItem(selectedLink);
  };

  return (
    <div className={clsx(
      wrapperStyle,
      "sidebar--wrapper",
    )}>
      <div className="logo">
        <Logo />
      </div>
      {sidebarItems.map((
        item: ISidebarItem,
        itemIndex: number,
      ) => (
        <RouterLink
          className="sidebar-item"
          key={itemIndex}
          to={PATHS[item.link]}
          onClick={handleRouting(item.link)}
        >
          <div
            className={clsx(
              'sidebar-item--shape',
              selectedSidebarItem === item.link ? 'active' : ''
            )}
          ></div>
        </RouterLink>
      ))}
    </div>
  )
};

export default SideBar;
