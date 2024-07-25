// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";


const config = {
    initialMessages: [createChatBotMessage(`Hello How can I help you`),

    ],
    botName: 'CrazyBot',
    customComponents: {
        // BotAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        botMessageBox:{
            backgroundColor : 'red'
        },

        chatButton :{
            backgroundColor:'pink'
        }
    }

}

export default config