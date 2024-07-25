// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        //   console.log(message)
        console.log(this.state);
        const lowercase = message.toLowerCase();
        if (lowercase.includes('hello mate')) {
            console.log('guten tag!')
        }
    }
}

export default MessageParser;