import { useState } from 'react'
import Chatbot from "react-chatbot-kit";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='max-w-7xl mx-auto flex justify-center items-center'>
          <h1>React Chatbot</h1>
          <Chatbot />
        </div>
      </div>
    </>
  )
}

export default App
