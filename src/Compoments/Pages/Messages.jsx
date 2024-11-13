import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { toast, Toaster } from "react-hot-toast"; // Import toast for notifications

const JobMessage = () => {
  const [selectedUser, setSelectedUser] = useState(1); // Default select the first user
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      profileImage: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`, // Random profile image
      messages: [
        { id: uuidv4(), text: `Hello, I am User ${i + 1}`, sender: "other" },
        { id: uuidv4(), text: `Hi, I am ${i === 0 ? "me" : "you"}`, sender: "me" },
      ],
    }))
  );

  const messageEndRef = useRef(null); // Ref for auto-scrolling to the latest message

  // Handle sending message
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: uuidv4(),
        text: message,
        sender: "me",
      };
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser
            ? { ...user, messages: [...user.messages, newMessage] }
            : user
        )
      );
      setMessage(""); // Clear input field after sending
      toast.success("Message sent!"); // Show success toast
    } else {
      toast.error("Please enter a message before sending."); // Error toast if empty message
    }
  };

  // Handle selecting a user
  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
  };

  // Scroll to the latest message when the messages update
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [users, selectedUser]); // Trigger scroll when messages change

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-gray-900 text-white">
      {/* Left side - Message Display (Scrollable) */}
      <div className="lg:w-2/3 w-full p-4 flex flex-col h-[42rem]">
        {/* Message List */}
        <div className="flex-1 overflow-y-auto mb-4">
          {users
            .find((user) => user.id === selectedUser)
            .messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-2 ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender !== "me" && (
                  <img
                    src={users.find((user) => user.id === selectedUser).profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-3 rounded-lg ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-700"}`}
                >
                  {msg.text}
                </div>
                {msg.sender === "me" && (
                  <img
                    src={users.find((user) => user.id === selectedUser).profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full ml-2"
                  />
                )}
              </div>
            ))}
          {/* Reference to scroll to the latest message */}
          <div ref={messageEndRef}></div>
        </div>

        {/* Message Input */}
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </div>

      {/* Right side - User List (Scrollable) */}
      <div className="lg:w-1/3 w-full p-4 bg-gray-800 overflow-y-auto h-[42rem]">
        <div className="flex flex-col space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                user.id === selectedUser ? "bg-gray-700" : "bg-gray-600"
              }`}
            >
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-green-400">Online</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default JobMessage;
