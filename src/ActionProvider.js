
// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   helloWorldHandler =() =>{
    const message = this.createChatBotMessage("Hello , I'am not self aware . Luckily !")
    this.setChatbotMessage(message);
   }

   errorResponseHandler =() =>{
    const message = this.createChatBotMessage("As an unprepared AI model , Iam unable to provide appropriete response ")
    this.setChatbotMessage(message);
   }
   idHandler =() =>{
    const message = this.createChatBotMessage("Iam an AI chatbot model created by Saad . ")
    this.setChatbotMessage(message);
   }

   setChatbotMessage = (message) =>{
    this.setState(state => ({...state , messages:[...state.messages , message] }))
   }
 }
 
 export default ActionProvider;
 

 