import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ showBackButton = false }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <header className="px-6 py-6 border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="group p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 hover:opacity-80 transition-opacity no-underline">
            Voyer
          </Link>
        </div>

        <Button
          variant="secondary"
          disabled={true}
          className="cursor-not-allowed opacity-50 bg-white/5 border border-white/10 text-white hover:bg-white/10 !rounded-full px-6 transition-all duration-300"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}

Header.propTypes = {
  showBackButton: PropTypes.bool
}

export default Header
