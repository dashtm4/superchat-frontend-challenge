import React from 'react'
import clsx from 'clsx';

import './BaseCard.scss';

interface IProps {
  children?: any;
  className?: string;
}

function BaseCard({
  children,
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={clsx(
      wrapperStyle,
      "base-card--wrapper",
    )}>
      {children}
    </div>
  )
};

export default BaseCard;
