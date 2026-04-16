import React from 'react'

const TestRef = () => {
    const [input, setInput] = useState('');
    const inputElement = useRef();
    const countRef = useRef(0);
    useEffect(() => {

    })
    
    const handleClick = () => {
        inputElement.current.focus();
    }   
  return (
    <div>
        <input
        ref={inputElement}
         value={input}
         onChange={(e) => setInput(e.target.value)} 
         placeholder='enter any value' />
        <input type='button' onClick={handleClick}/>
    </div>
  )
}
