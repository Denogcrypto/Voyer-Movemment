import PropTypes from 'prop-types'

const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseStyles = variant === 'primary'
    ? 'lofi-button'
    : 'lofi-button-secondary'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button
