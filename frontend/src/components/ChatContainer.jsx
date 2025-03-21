import { useEffect } from 'react'
import { useChatStore } from "../store/useChatStore";
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import MessageSkeleton from './skeletons/MessageSkeleton';

const ChatContainer = () => {
  const {message , getMessages , isMessageLoading,selectedUser} = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id,getMessages]);

  if (isMessageLoading) {return(
    <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader/>
        <MessageSkeleton/>
        <MessageInput/>
    </div>)
    }

  return (
    <div className="flex-1 flex-col overflow-auto">
      <ChatHeader/>

      <p>message...</p>

      <MessageInput/>
      
    </div>
  )
}

export default ChatContainer