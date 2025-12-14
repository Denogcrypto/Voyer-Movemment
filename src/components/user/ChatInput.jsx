import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'

const ChatInput = ({ onSendMessage, disabled = true }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && onSendMessage && !disabled) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t-2 border-lofi-sand bg-lofi-bg p-4">
      <div className="max-w-4xl mx-auto flex gap-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={disabled}
          className="flex-1 lofi-textarea min-h-[50px] max-h-[150px]"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(e)
            }
          }}
        />
        <Button
          type="submit"
          disabled={disabled || !message.trim()}
          variant="primary"
          className="self-end"
        >
          Enviar
        </Button>
      </div>
      {disabled && (
        <p className="text-xs text-lofi-textLight text-center mt-2">
          El chat no es funcional en esta version MVP
        </p>
      )}
    </form>
  )
}

ChatInput.propTypes = {
  onSendMessage: PropTypes.func,
  disabled: PropTypes.bool
}

export default ChatInput
