import { useState } from 'react'
import PropTypes from 'prop-types'

const TagInput = ({ tags = [], onTagsChange, disabled = true }) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() && !disabled) {
      e.preventDefault()
      if (!tags.includes(inputValue.trim())) {
        onTagsChange([...tags, inputValue.trim()])
      }
      setInputValue('')
    }
  }

  const removeTag = (tagToRemove) => {
    if (!disabled) {
      onTagsChange(tags.filter((tag) => tag !== tagToRemove))
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 mb-2 min-h-[32px]">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm flex items-center gap-2">
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="hover:text-white transition-colors w-4 h-4 flex items-center justify-center rounded-full hover:bg-pink-500/50"
              >
                ×
              </button>
            )}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un tag y presiona Enter"
        disabled={disabled}
        className="w-full bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all cursor-not-allowed opacity-70"
      />
      {disabled && (
        <p className="text-xs text-pink-400/80 flex items-center gap-1">
          ⚠️ Los tags no son funcionales en esta versión MVP
        </p>
      )}
    </div>
  )
}


TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagsChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default TagInput
