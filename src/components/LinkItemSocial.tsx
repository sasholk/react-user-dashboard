import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  href: string;
  icon?: IconProp;
}

export const LinkItemSocial: React.FC<Props> = React.memo(({ href, icon }) => (
  <a href={href} className="text-dark text-decoration-none mr-3">
    {icon && <FontAwesomeIcon icon={icon} size="lg" />}
  </a>
));
