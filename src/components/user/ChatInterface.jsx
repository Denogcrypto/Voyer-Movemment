import { useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'
import PropTypes from 'prop-types'

const ChatInterface = ({ messages = [] }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 bg-lofi-bg">
      <div className="max-w-4xl mx-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 py-12">
              <div className="text-4xl">💬</div>
              <p className="text-lofi-textSecondary">
                Comienza una conversacion con el agente
              </p>
              <p className="text-sm text-lofi-textLight">
                El agente te ayudara a descubrir contenido exclusivo
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                message={msg.message}
                sender={msg.sender}
                timestamp={msg.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  )
}

ChatInterface.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['agent', 'user']).isRequired,
      timestamp: PropTypes.string
    })
  )
}

export default ChatInterface
