import React from 'react';

const PortfolioItemPage = (props) => {
  return (
    <div>
      <h2>Portfolio Item</h2>
      <p> Item id : {props.match.params.id}</p>
    </div>
  )
};

export default PortfolioItemPage;