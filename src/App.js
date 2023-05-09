import Content from "./Content"
import AddItem from "./AddItem"

import { useState } from "react"

function App() {

  //STATES

  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('homerslist')) || [])

const [ newItem, setNewItem] = useState('')

//FUNCTIONS

const setAndSave = (listItems) => {
  setItems(listItems)
  localStorage.setItem('homerslist', JSON.stringify(listItems))  
}


const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myNewItem = { id, checked: false, item }
  const listItems = [ ...items, myNewItem ]
  setAndSave(listItems)
}

const handleSubmit = (e) => {
  e.preventDefault()
  addItem(newItem)
  setNewItem('')
}

const handleCheck = (id) => {
  const listItems = items.map((item) => (
    item.id === id ? { ...item, checked:!item.checked } : item
  ))
  setAndSave(listItems)
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => 
  item.id !== id)
  setAndSave(listItems)
}

  return ( 
    <div className="App">
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
       />
      <Content 
        items={items}
        handleCheck={handleCheck} 
        handleDelete={handleDelete}
        />
      
    </div>
  );
}

export default App;


/* [
  { id: 1, checked: true, item: 'walk Santas Little Helper' },
  { id: 2, checked: false, item: 'thrash Bart' },
  { id: 3, checked: false, item: 'come home drunk' }
] */