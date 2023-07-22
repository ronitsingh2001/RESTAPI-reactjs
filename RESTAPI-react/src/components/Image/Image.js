import React from 'react';

import './Image.css';

const image = props => {

  const imageUrl = props.imageUrl;;
  const fixedImageUrl = imageUrl.replace(/\\/g, '/');
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url('${fixedImageUrl}')`,
        backgroundSize: props.contain ? 'contain' : 'cover',
        backgroundPosition: props.left ? 'left' : 'center'
      }}
    />
  );

}
export default image;
