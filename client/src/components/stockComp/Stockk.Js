import React from 'react';
import "./stock.scss";

const Stockk = ({item}) => {
  return (
    <div className='card'>
      <div className='logo-div'>
        <span className='head'>{item.name}</span>
        <img src={item.logo} alt="" />
        <span>{item.symbol}</span>
      </div>
      <div className='bottom-div'> 
        <div className='roi'>
          <span>ROI</span>
          <span>+10% - 20%</span>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Stockk;
