import React from "react";
import "./chat.scss";

import { motion } from "framer-motion"

interface IConversation {
    name: string;
    lastMessage: string;
    timestamp: string;
    joinAction: string;
}

interface IForumTopic {
    title: string;
    link: string;
}

const Chat: React.FC = () => {
    const conversations: IConversation[] = [
        {
            name: "Math Class",
            lastMessage: "Hello, who can help me with the homework?",
            timestamp: "Today at 2:30 PM",
            joinAction: "Join",
        },
        {
            name: "History Study Group",
            lastMessage: "When is our next meeting?",
            timestamp: "Yesterday at 5:45 PM",
            joinAction: "Join",
        },
    ];

    const forumTopic: IForumTopic = {
        title: "General Discussion",
        link: "/forum/general-discussion",
    };

    return (
        <motion.div 
            className="box chat-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className="chat-header">
                <span className="chat-icon">💬</span>
                <div className="chat-title">Chat</div>
            </div>

            <div className="conversations-list">
                {conversations.map((conversation, index) => (
                    <div key={index} className="conversation-item">
                        <div className="conversation-name">{conversation.name}</div>
                        <div className="last-message">{conversation.lastMessage}</div>
                        <div className="timestamp">{conversation.timestamp}</div>
                        <button className="join-button">{conversation.joinAction}</button>
                    </div>
                ))}
            </div>

            <div className="forum-widget">
                <a href={forumTopic.link} className="forum-link">
                    <span className="forum-icon">💬</span>
                    Forum
                </a>
                <div className="trending-topic">
                    <div className="topic-title">{forumTopic.title}</div>
                    <a href={forumTopic.link} className="view-more-link">
                        See More
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Chat;