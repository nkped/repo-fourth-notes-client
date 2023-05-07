import Content from "./Content";

import { useState } from "react";



function App() {

const [ items, setItems ] = useState([
  { id: 1, checked: true, item: 'walking the dog' },
  { id: 2, checked: false, item: 'cleaning the gutters' },
  { id: 3, checked: false, item: 'fixing the roof' }
])




  return (
    <div className="App">
      <Content 
        items={items}
        />
    </div>
  );
}

export default App;
