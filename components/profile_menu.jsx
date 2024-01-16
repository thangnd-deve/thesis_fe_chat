import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";

export default function ProfileMenu() {
    const socket = new WebSocket("ws://127.0.0.1:8080/chat");

    socket.onopen = function () {
        console.log('Connected');
    };

    socket.onmessage = function (event) {
        console.log('Message received:', event.data);
        // Handle the received message as needed
    };

    socket.onclose = function (event) {
        console.log('Connection closed:', event);
    };

    socket.onerror = function (error) {
        console.error('WebSocket Error:', error);
    };

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={'mr-0 w-1/2 grid justify-items-end'}>
            <Dropdown style={{ color: 'text-blue-600' }} onClose={() => setOpenModal(openModal)} label="Chat Name"
                dismissOnClick={false}>
                {!openModal && (
                    <>
                        <Dropdown.Item className="text-blue-600">Dashboard</Dropdown.Item>
                        <Dropdown.Item className="text-blue-600">Settings</Dropdown.Item>
                        <Dropdown.Item className="text-blue-600">Earnings</Dropdown.Item>
                        <Dropdown.Item className="text-blue-600">Earnings</Dropdown.Item>
                        <Dropdown.Item className="text-blue-600">Sign out</Dropdown.Item>
                    </>
                )}
            </Dropdown>
        </div>
    );
}
