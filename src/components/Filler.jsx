import React from 'react';


const Filler = ({section}) => {

  const general = {
    height: '28vh',
    width: '100%',
    backgroundColor: 'transparent'
  };

  return (
    <div id={section} style={general}></div>
  );
};

export default Filler;
