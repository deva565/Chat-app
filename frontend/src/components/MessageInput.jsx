import {useState,useRef, use} from 'react'
import { useChatStore } from '../store/useChatStore';

const MessageInput = () => {
  const [text,setText] = useState("");
  const [imagePreview,setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const {sendMessage} =useChatStore();
  
  return (
    <div>MessageInput</div>
  )
}

export default MessageInput