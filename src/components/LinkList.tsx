import React from 'react';

interface LinkComponentProps {
  href: string;
  text: string;
}

interface Props {
  links: LinkComponentProps[];
  gap: number;
  LinkComponent: React.FC<LinkComponentProps>;
  flexDirection?: 'column' | 'row';
}

export const LinkList: React.FC<Props> = ({ links, gap, LinkComponent, flexDirection = 'column' }) => (
  <ul className={`list-unstyled d-flex flex-${flexDirection} flex-md-row gap-${gap}`}>
    {links.map((link) => (
      <li key={link.href}>
        <LinkComponent {...link} />
      </li>
    ))}
  </ul>
);
