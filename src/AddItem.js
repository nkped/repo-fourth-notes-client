import React from 'react'

const AddItem = ({ newItem, setNewItem }) => {
  return (
    <div className='addForm'>
        <input 
            className='item'
            type='text' 
            placeholder='add (Flanders suck!) here...' 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)} />
        <button
            role='submit' >+</button>
    </div>
  )
}

export default AddItem