import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white relative overflow-hidden font-inter">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-blob">
          <div className="w-full h-full bg-indigo-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
        </div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] animate-blob animation-delay-2000">
          <div className="w-full h-full bg-blue-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen delay-700"></div>
        </div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] animate-blob animation-delay-4000">
          <div className="w-full h-full bg-cyan-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen delay-1000"></div>
        </div>
      </div>

      {/* Header */}
      <header className="z-10 px-6 py-6 border-b border-white/5 backdrop-blur-sm sticky top-0 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 hover:scale-105 transition-transform cursor-default">
            Voyer
          </h1>
          <Button
            variant="secondary"
            disabled={true}
            className="cursor-not-allowed opacity-50 bg-white/5 border border-white/10 text-white hover:bg-white/10 !rounded-full px-6 backdrop-blur-md transition-all duration-300"
          >
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-3xl w-full text-center space-y-16">

          {/* Hero Section */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 backdrop-blur-md hover:bg-indigo-500/20 transition-colors cursor-default">
              <span className="text-indigo-300 text-xs font-semibold tracking-widest uppercase">Beta Access</span>
            </div>
            <h2 className="text-7xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-200 to-indigo-400 drop-shadow-sm">
                Voyer
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              La plataforma descentralizada definitiva para descubrir y monetizar contenido exclusivo en la blockchain.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in-up delay-200">
            {/* Consumer Card */}
            <div
              onClick={() => navigate('/voyer')}
              className="group cursor-pointer relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-lg hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <span className="text-4xl filter drop-shadow-lg">👀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Voyer</h3>
                  <p className="text-sm text-slate-400 group-hover:text-indigo-200 transition-colors">
                    Explorar contenido exclusivo
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-indigo-300 text-sm font-medium group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    Entrar ahora <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Creator Card */}
            <div
              onClick={() => navigate('/spied-on')}
              className="group cursor-pointer relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 backdrop-blur-lg hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto group-hover:bg-pink-500 group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <span className="text-4xl filter drop-shadow-lg">📸</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Creator</h3>
                  <p className="text-sm text-slate-400 group-hover:text-pink-200 transition-colors">
                    Soy creador de contenido
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-pink-300 text-sm font-medium group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    Conectar wallet <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-16 pb-8 animate-fade-in-up delay-300">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-slate-500 text-sm hover:text-white transition-colors cursor-help">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Powered by Movement Network
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
