const ChatMessage = require('../models/ChatMessage');

// Save a chat message and response
async function saveChatMessage(userId, message, response) {
  const chat = new ChatMessage({ userId, message, response });
  return await chat.save();
}

// Get recent chat history
async function getUserChats(userId) {
  return await ChatMessage.find({ userId }).sort({ createdAt: -1 }).limit(10);
}

module.exports = {
  saveChatMessage,
  getUserChats
};
