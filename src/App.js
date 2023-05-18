import Content from "./Content"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import apiRequest from "./apiRequest"

import { useState, useEffect } from "react"


function App() {
const API_URL = 'http://localhost:3500/items'

  //STATES
const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('homerslist')) || [])
const [ newItem, setNewItem] = useState('')
const [ search, setSearch ] = useState('')
const [ fetchError, setFetchError ] = useState(null)
const [ isLoading, setIsloading ] = useState(true)


useEffect(() => {
  const fetchUrl = async () => {
    try { 
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Doh! Please reload Homers app!') 
      const listItems = await response.json()
      setItems(listItems)
      console.log(listItems)
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message)
    } finally {
      setIsloading(false)
    }
  }
  setTimeout(() => fetchUrl(), 2000)
}, []) 


//FUNCTIONS

const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myNewItem = { id, checked: false, item }
  const listItems = [ ...items, myNewItem ]
  setItems(listItems)

  const postOptions = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions)
  if (result) setFetchError(result)



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
  setItems(listItems)
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => 
  item.id !== id)
  setItems(listItems)
}

  return ( 
    <div className="App">
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
        />
      <SearchItem 
        search={search} 
        setSearch={setSearch} 
        />
      <Content 
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()) )}
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