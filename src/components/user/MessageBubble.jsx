import PropTypes from 'prop-types'

const MessageBubble = ({ message, sender, timestamp }) => {
  const isAgent = sender === 'agent'

  return (
    <div className={`flex ${isAgent ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lofi px-4 py-3 ${
          isAgent
            ? 'bg-lofi-card text-lofi-textPrimary'
            : 'bg-lofi-terracota text-lofi-bg'
        }`}
      >
        <p className="text-sm md:text-base">{message}</p>
        {timestamp && (
          <span className={`text-xs mt-1 block ${
            isAgent ? 'text-lofi-textLight' : 'text-lofi-sand opacity-80'
          }`}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  )
}

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.oneOf(['agent', 'user']).isRequired,
  timestamp: PropTypes.string
}

export default MessageBubble
