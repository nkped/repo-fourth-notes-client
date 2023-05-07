import React from 'react'

const Content = ({ items }) => {
  return (
    <div>
        <ul>
            {items.map((item) => (
                <li key={item.id} >
                    <input 
                        className='item'
                        type='checklist' 
                        checked={item.checked}               
                        />
                    <label >{item.item}</label>
                </li>
            ))} </ul></div>
  )
}

export default Content