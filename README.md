# React Chatbot

A small interactive chatbot project built while learning React. The goal was to practice turning a static page into a working interface: split it into components, manage changing data, respond to user events, render a conversation, and keep that conversation after a refresh.

## What this project demonstrates

This project brings several core frontend ideas together in one application:

- **Component-based UI:** The app is divided into focused pieces for the message list, individual messages, and the input controls.
- **State with `useState`:** React state holds the conversation, the text being typed, and whether a reply is loading.
- **Props and component communication:** The app passes messages and a state update function down to the input; the message list receives the conversation to display.
- **Side effects with `useEffect`:** The app registers custom chatbot replies when it starts and saves conversation changes to `localStorage`.
- **Reusable custom hook:** `useAutoScroll` uses a ref and an effect to scroll the conversation to the newest message.
- **Rendering data and conditional UI:** Messages are rendered from an array with stable IDs as keys. The empty conversation has a welcome message, and a loading indicator is shown while a reply is pending.
- **Events and asynchronous work:** The input handles typing, Enter, Escape, sending, and clearing. Chatbot replies are requested asynchronously.
- **Working with packages and assets:** Day.js formats message times; `supersimpledev` supplies chatbot responses; local image assets provide avatars and a loading animation.
- **Styling a responsive layout:** CSS flexbox arranges the chat, input, and message rows, while the message area can scroll independently.

## How a message travels through the app

1. You type into the controlled input. Its value is held in React state.
2. Sending adds a timestamped user message to the conversation and clears the input.
3. The app displays a loading indicator while it awaits the chatbot response.
4. When the response arrives, the indicator is replaced by a robot message.
5. The updated conversation is saved to browser storage, rendered in the message list, and scrolled into view.

## Interface

- User and robot messages have separate avatars and message styles.
- Each completed message displays a time.
- The message history scrolls to the latest message automatically.
- The conversation is restored from browser `localStorage` when the app is opened again.
- Send with the **Send** button or Enter. Press Escape to clear the text field.
- Use **Clear** to empty the conversation.

## Built with

- React 19
- Vite
- Day.js
- `supersimpledev`

## Learning outcome

This project was an opportunity to practice connecting React concepts rather than using them in isolation. The conversation state drives the interface; props connect the components; effects synchronize the app with browser storage and setup; and asynchronous work updates the conversation as the chatbot responds. Together, these pieces form a complete small UI interaction from input to saved, rendered reply.
