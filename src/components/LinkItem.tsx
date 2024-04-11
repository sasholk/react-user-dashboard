import React from 'react';

interface Props {
  href: string;
  text: string;
}

export const LinkItem: React.FC<Props> = React.memo(({ href, text }) => (
  <a href={href} className="text-dark text-decoration-none mr-3">{text}</a>
));
