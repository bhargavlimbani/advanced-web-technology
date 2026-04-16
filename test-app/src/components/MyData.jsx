import React from 'react'

const MyData = ({items}) => {
    const [inp, setInp] = React.useState('');
    const handleAdd = () => {
        //add new item to items
        items.push(inp)
        setInp('')
    }
  return (
    <div>
        MyData
        <hr />
        <input 
        type='text'
        value={inp}
        onChange={e => setInp(e.target.value)} 
        />
        <button onClick={handleAdd}>Add</button>
        <hr />
         Items are {
            items.map(item => (<p>{item}</p>))
        }
    </div>
  )
}

export default MyData