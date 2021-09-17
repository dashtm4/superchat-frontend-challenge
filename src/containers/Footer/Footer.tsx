import React from 'react'
import clsx from 'clsx';

import './Footer.scss';

interface IProps {
  className?: string;
}

function Footer({
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={clsx(
      wrapperStyle,
      "footer--wrapper",
    )}>
      <div className="footer--content">
        © IT Promocodes, 2019
      </div>
    </div>
  )
};

export default Footer;
