import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Order cakes here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Appetizer'
              path='/details'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Cake'
              path='/details'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Chocklate cake'
              path='/details'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Chocklate chip cookie'
              path='/details'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Cake'
              path='/details'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
