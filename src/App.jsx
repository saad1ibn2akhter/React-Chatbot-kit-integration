import { useState } from 'react'
import Chatbot from "react-chatbot-kit";

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css'
import { FaRobot } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <div>
        <div className='max-w-7xl mx-auto flex justify-center items-center h-[2000px]'>
          <button className='btn btn-secondary sticky bottom-0 left-full z-50' onClick={handleShow}> <FaRobot className='w-[30px] h-[30px]'></FaRobot>  </button>
          {
            show ? <>
              <div className='border-2 border-pink-700 p-4'>
                <Chatbot width='600px' className='border-2 ' actionProvider={ActionProvider} config={config} messageParser={MessageParser} />
              </div>
            </> : <>
              {/* <h1>no chat available</h1> */}
            </>
          }
        </div>
      </div>
    </>
  )
}

export default App
