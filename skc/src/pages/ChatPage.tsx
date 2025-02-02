import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"

interface Message {
  text: string
  isUser: boolean
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm CodeBuddy, your coding assistant. How can I help you today?", isUser: false },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() === "") return

    const newUserMessage: Message = { text: inputMessage, isUser: true }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = { text: getBotResponse(inputMessage), isUser: false }
      setMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase()
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hello! How can I assist you with your coding journey today?"
    } else if (lowerCaseMessage.includes("python")) {
      return "Python is a great language to start with! It's known for its simplicity and readability. Would you like to learn about variables, loops, or functions in Python?"
    } else if (lowerCaseMessage.includes("javascript")) {
      return "JavaScript is a versatile language used for web development. It can make websites interactive. What would you like to know about JavaScript?"
    } else if (lowerCaseMessage.includes("help")) {
      return "I'm here to help! What specific coding topic would you like assistance with? I can help with basic concepts, programming languages, or coding challenges."
    } else {
      return "That's an interesting question! Could you provide more details or specify which programming concept you'd like to learn about?"
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesEndRef])

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{backgroundImage: "url('Images/bacgroundImage.jpeg')", backgroundSize:"cover",backgroundPosition:"center"}}>
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-2 rounded-lg ${
                message.isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-300">
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-2 border bg-transparent text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={24} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatPage

