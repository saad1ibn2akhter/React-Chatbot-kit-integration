// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";
import './App.css';

const botName = "Studybot"
const config = {
    initialMessages: [createChatBotMessage(`Hello I'm ${botName} How can I help you`),

    ],
    botName: 'CrazyBot',
    customComponents: {
        // BotAvatar: (props) => <BotAvatar {...props} />
        // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
    },
    customStyles: {
        botMessageBox:{
            backgroundColor : 'red',
  
        },

        chatButton :{
            backgroundColor:'pink'
        },
        outerWidth:{
            width:'500px',
        },
        outerHeight:{
            height:'500px'
        },
        innerWidth:{
            width:'500px',
        },
        innerHeight:{
            height:'500px'
        },
    
    }

}

export default config