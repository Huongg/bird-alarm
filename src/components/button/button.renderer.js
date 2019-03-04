import React from 'react';

const mockData = ['Lighting', 'Music', 'Volume', 'Camera'];

const Button = () => {
  return mockData.map(data => {
    return (
      <button className="button">
        <div className='button-icon'></div>
        <p className='button-text'>{data}</p>
      </button>
    );
  })
}

export default Button;
