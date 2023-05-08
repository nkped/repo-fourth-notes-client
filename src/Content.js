import React from 'react'

const Content = ({ items, handleCheck }) => {
  return (
    <main>
        <ul>
            {items.map((item) => (
                <li key={item.id} className='item'>
                    <input 
                        type='checkbox' 
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        />
                    <label 
                        style={ (item.checked) ? {textDecoration: 'line-through'} : null }
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                </li>
            ))}
            
        </ul>
    </main>
  )
}

export default Content