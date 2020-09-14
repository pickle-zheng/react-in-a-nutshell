import React from 'react';

const ChatBox = (props) => {
  return (
    <div className='chats'>
      {props.chats.map((chat) => {
        return (
          <p key={chat.timestamp}>
            {chat.user}: {chat.content}
          </p>
        );
      })}
    </div>
  );
};

export default ChatBox;
