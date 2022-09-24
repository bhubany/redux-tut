import React from 'react'

export default function Header(props) {
  return (
    <div>
      <div className='add-to-cart'>
            <span className='cart-count'>{props.cardData.length}</span>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/62/87/flat-design-shopping-cart-vector-13576287.jpg" alt="" />
        </div>
    </div>
  )
}
