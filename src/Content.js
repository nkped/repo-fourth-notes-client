import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const Content = ({ items, setItems, handleCheck, handleDelete }) => {


    
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
                    <FaTrashAlt 
                        role='button' 
                        onClick={() => handleDelete(item.id)} 
                        tabIndex='0'
                        />
                </li>
            ))}
            
        </ul>
    </main>
  )
}

export default Content