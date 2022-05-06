import React, { useEffect, useState } from "react";
import axios from "axios";

export const ChatPage = () => {
  const [chat, setChat] = useState([] );
  const fetchChat = async () => {
    const {data} = await axios.get("/api/chat");
    setChat(data);
    console.log(data);
  };
  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {chat.map((e) => (
        <div key={e.div}>{e.chatName}</div>
      ))}
    </div>
  );
};
