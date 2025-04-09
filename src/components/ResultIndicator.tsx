
import React from 'react';

interface ResultIndicatorProps {
  status: string;
  colorClass: string;
}

const ResultIndicator = ({ status, colorClass }: ResultIndicatorProps) => {
  return (
    <span className={`result-indicator ${colorClass}`}>
      {status}
    </span>
  );
};

export default ResultIndicator;
