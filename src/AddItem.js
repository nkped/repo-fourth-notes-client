import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input 
            className='item'
            type='text' 
            placeholder='add (Flanders suck!) here...' 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)} />
        <button
            role='submit' >+</button>
    </form>
  )
}

export default AddItem