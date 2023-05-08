import Content from "./Content"

import { useState } from "react"

function App() {

const [ items, setItems ] = useState([
  { id: 1, checked: true, item: 'walking Santas Little Helper' },
  { id: 2, checked: false, item: 'thrashing Bart' },
  { id: 3, checked: false, item: 'coming home drunk' }
])


const handleCheck = (id) => {
  const listItems = items.map((item) => (
    item.id === id ? { ...item, checked:!item.checked } : item
  ))
  setItems(listItems)
}

const handleDelete = (id) => {}
const handleSubmit = () => {}


  return (
    <div className="App">
      <Content 
        items={items}
        setItems={setItems}
        handleCheck={handleCheck} 
        handleDelete={handleDelete}
        />
      
    </div>
  );
}

export default App;
