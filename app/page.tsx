'use client';

import {SetStateAction, useState} from "react";
import ChatName from "@/components/chat_name";
import Sidebar from "@/components/sidebar";

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([{
        id: 1,
        sender: 'John Doe',
        content: 'Hello!',
        avatar: 'https://placekitten.com/50/50'
    }, {id: 2,
        sender: 'Jane Smith', content: 'How are you?', avatar: 'https://placekitten.com/50/51'}, {
        sender: 'John Doe',
        content: 'Nice to meet you!',
        avatar: 'https://placekitten.com/50/52'
    },]);

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, {sender: 'You', content: inputValue, avatar: 'https://placekitten.com/50/53'}]);
            setInputValue('');
        }
    };
    return (<>

        <main className=" flex min-h-screen p-2">
            <Sidebar></Sidebar>
            <div
                className="flex flex-col bg-gray-50 rounded-xl text-gray-700 flex-grow shadow-xl shadow-blue-gray-900/5"
                style={{marginLeft: '1rem'}} // Add some margin to separate left and right sidebars
            >
                <ChatName></ChatName>
                <div className="flex-grow p-4 overflow-y-auto border-gray-300">
                    {/* Display Messages */}
                    {messages.map((message, index) => (
                        <>
                            <div key={message.id}
                                 className="flex items-start bg-gray-50 p-4 rounded mt-2 hover:bg-gray-100">
                                <img src={message.avatar} alt="Avatar" className="w-10 h-10 rounded-full"/>
                                <div className="flex flex-col pl-4">
                                    <span className="font-semibold">{message.sender}</span>
                                    <span>{message.content}</span>
                                </div>
                            </div>
                        </>))}
                </div>
                {/* Input and Send Button */}
                <div className="flex items-center p-4 bg-white border-t border-gray-300 mt-auto">
                    <div className="flex-grow">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-full border rounded-l-md p-2"
                        />
                    </div>
                    <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-r-md p-2 ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 rotate-90"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
        </>)
}
