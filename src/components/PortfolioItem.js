  
import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem(props) {
  return (
    <>
  
      <li className='cards__item cards__item1'>
        <Link className='cards__item__link cards__item__link1' to={props.path}>
          <figure className='cards__item__pic-wrap cards__item__pic-wrap1' data-category={props.label}>
            <img
              className='cards__item__img cards__item__img1'
              alt='Travel Image Travel Image1'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info cards__item__info1'>
           
            <h5 className='cards__item__text cards__item__text1'>{props.text}</h5>
          </div>
        </Link>
      </li>
 
    </>
  );
}

export default PortfolioItem;