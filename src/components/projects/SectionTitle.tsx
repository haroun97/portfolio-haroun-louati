
import React from 'react';

interface SectionTitleProps {
  id: string;
  title: string;
}

const SectionTitle = ({ id, title }: SectionTitleProps) => {
  return (
    <h2 id={id} className="section-title">{title}</h2>
  );
};

export default SectionTitle;
