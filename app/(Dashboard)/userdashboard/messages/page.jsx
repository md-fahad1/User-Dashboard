"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaCircle,
  FaSearch,
  FaSmile,
  FaPaperclip,
} from "react-icons/fa";

// Dummy contacts
const contactsData = [
  {
    id: 1,
    name: "John Doe",
    active: true,
    unread: 2,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    active: false,
    unread: 0,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    active: true,
    unread: 5,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Alice Brown",
    active: true,
    unread: 0,
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Robert Wilson",
    active: false,
    unread: 1,
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

// Dummy messages
const initialMessages = {
  1: [
    { sender: "me", text: "Hello John!", time: "10:00 AM", date: "2025-09-07" },
    {
      sender: "other",
      text: "Hi! How are you?",
      time: "10:02 AM",
      date: "2025-09-07",
    },
    {
      sender: "me",
      text: "I am fine. What about you?",
      time: "10:05 AM",
      date: "2025-09-07",
    },
  ],
  2: [
    {
      sender: "other",
      text: "Are you available for a meeting?",
      time: "09:30 AM",
      date: "2025-09-06",
    },
  ],
  3: [
    { sender: "me", text: "Hey Mike!", time: "Yesterday", date: "2025-09-06" },
    {
      sender: "other",
      text: "Hello! Long time no see.",
      time: "Yesterday",
      date: "2025-09-06",
    },
  ],
};

const MessagesPage = () => {
  const [contacts] = useState(contactsData);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedContact, setSelectedContact] = useState(contacts[0].id);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedContact, messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const updatedMessages = { ...messages };
    if (!updatedMessages[selectedContact])
      updatedMessages[selectedContact] = [];
    updatedMessages[selectedContact].push({
      sender: "me",
      text: newMessage,
      time: "Now",
      date: new Date().toISOString().split("T")[0],
    });
    setMessages(updatedMessages);
    setNewMessage("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedContactData = contacts.find((c) => c.id === selectedContact);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Messages
        </h2>

        {/* Search */}
        <div className="mb-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-2">
            <FaSearch className="text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 w-full bg-transparent focus:outline-none text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Contacts */}
        <ul className="flex-1 overflow-y-auto space-y-3">
          {filteredContacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                selectedContact === contact.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                      contact.active ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>
                <span className="font-medium">{contact.name}</span>
              </div>
              {contact.unread > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {contact.unread}
                </span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <img
              src={selectedContactData?.avatar}
              alt={selectedContactData?.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {selectedContactData?.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedContactData?.active ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-100 dark:bg-gray-900">
          {messages[selectedContact]?.map((msg, index) => {
            const showDate =
              index === 0 ||
              msg.date !== messages[selectedContact][index - 1].date;
            return (
              <div key={index}>
                {showDate && (
                  <div className="flex justify-center my-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {msg.date}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-xl shadow-md break-words ${
                      msg.sender === "me"
                        ? "bg-blue-500 text-white animate-slideInRight"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 animate-slideInLeft"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs text-gray-300 dark:text-gray-400 block mt-1 text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 shadow-inner border-t border-gray-200 dark:border-gray-700">
          <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FaSmile />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FaPaperclip />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            <FaPaperPlane />
          </button>
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
