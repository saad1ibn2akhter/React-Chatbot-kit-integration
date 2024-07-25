import { useState } from 'react'
import Chatbot from "react-chatbot-kit";

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import  'react-chatbot-kit/build/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='max-w-7xl mx-auto flex justify-center items-center'>
          
          <div className='border-2 border-pink-700 p-4'>
          <Chatbot className='border-2 '  actionProvider={ActionProvider} config={config} messageParser={MessageParser} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
