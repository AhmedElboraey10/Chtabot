import { useState , useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState(
        JSON.parse( localStorage.getItem( "messages" ) ) || ''
    );
    useEffect(
        () => {
            Chatbot.addResponses(
                {
                    "hi": "hi how are you" ,
                    "what is your name": "my name is Mr Robot"
                }
            )
        } ,
        []
    )

    useEffect(
        () => {
            localStorage.setItem( "messages" , JSON.stringify( chatMessages ) )
        } ,
        [chatMessages]
    )

    return (
        <div
            className="app-container"
        >
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App