import React, { useState, useEffect } from 'react';
import { Send, User, Bot, PhoneCall } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai' | 'human';
  timestamp: string;
}

const Consultation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "您好！我是AI助手，很高兴为您提供咨询服务。请问您有什么问题吗？", sender: 'ai', timestamp: '14:00' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isHumanMode, setIsHumanMode] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    if (!isHumanMode) {
      try {
        // 这里应该是调用ChatGPT API的逻辑
        // 为了演示，我们使用一个模拟的API调用
        const response = await mockChatGPTAPI(newMessage);
        const aiReply: Message = {
          id: messages.length + 2,
          text: response,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiReply]);
      } catch (error) {
        console.error('Error calling ChatGPT API:', error);
      }
    } else {
      // 模拟人工客服回复
      setTimeout(() => {
        const humanReply: Message = {
          id: messages.length + 2,
          text: "您好，这里是人工客服。我们已收到您的问题，稍后会有专门的客服人员与您联系。",
          sender: 'human',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, humanReply]);
      }, 1000);
    }
  };

  const toggleMode = () => {
    setIsHumanMode(!isHumanMode);
    const modeChangeMessage: Message = {
      id: messages.length + 1,
      text: isHumanMode ? "已切换到AI助手模式。" : "已切换到人工客服模式，请稍候。",
      sender: isHumanMode ? 'ai' : 'human',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, modeChangeMessage]);
  };

  // 模拟ChatGPT API调用
  const mockChatGPTAPI = (message: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`感谢您的问题。根据您的询问"${message}"，我们的AI系统正在处理您的请求。请问您还有其他具体的问题或需求吗？`);
      }, 1000);
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">在线咨询</h2>
        <button
          onClick={toggleMode}
          className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition duration-300 flex items-center"
        >
          {isHumanMode ? <Bot className="mr-1" size={16} /> : <User className="mr-1" size={16} />}
          {isHumanMode ? '切换到AI模式' : '切换到人工模式'}
        </button>
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 
              message.sender === 'ai' ? 'bg-green-100' : 'bg-yellow-100'
            } rounded-lg p-3`}>
              <p>{message.text}</p>
              <span className="text-xs opacity-75 mt-1 block">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="border-t p-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="输入您的问题..."
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 flex items-center">
          <Send size={18} className="mr-1" />
          发送
        </button>
      </form>
    </div>
  );
};

export default Consultation;