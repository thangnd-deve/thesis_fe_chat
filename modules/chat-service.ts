
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
