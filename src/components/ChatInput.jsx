import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import dayjs from 'dayjs'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const time = dayjs().valueOf();

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading) return;
        if (inputText.length < 1) {
            alert("There Is No Message");
            return;
        }

        setInputText("");
        setIsLoading(true);

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                time: dayjs(time).format('h:mma'),
                id: crypto.randomUUID()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img
                    src = {LoadingSpinner}
                    style={{ height: 40, margin: -15 }}
                />,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages(
            [
                ...newChatMessages,
                {
                    message: response,
                    sender: 'robot',
                    time: dayjs(time).format('h:mma'),
                    id: crypto.randomUUID()
                }
            ]);

        setIsLoading(false);
    }

    function clearMessage() {
        setChatMessages( [] );
        localStorage.clear();
    }

    function keyPress(e) {
        if (e.key === 'Enter') sendMessage();
        else if (e.key === "Escape") setInputText('');
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a Message to a Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={keyPress}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >
                send
            </button>
            <button
                onClick={clearMessage}
                className="clear-button"
            >
                Clear
            </button>
        </div>
    );
}