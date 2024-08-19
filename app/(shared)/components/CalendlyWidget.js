import React from 'react';

const CalendlyWidget = ({ url }) => {
  return (
    <div>
      <iframe
        src={url}
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CalendlyWidget;
