import { useState } from "react"
import MyData from "./components/MyData"

function App() {
  const [items, setItems] = useState([])

  return (
    <>
      <MyData items={items} setItems={setItems} />
    </>
  )
}

export default App