import Header from '../components/common/Header'
import UploadForm from '../components/creator/UploadForm'

const SpiedOnPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white relative overflow-hidden font-inter">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-pink-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      </div>

      <div className="z-10 relative flex-1 flex flex-col">
        <Header showBackButton={true} className="bg-transparent border-b border-white/5 backdrop-blur-sm sticky top-0" />

        <main className="flex-1 px-4 md:px-6 py-8 md:py-12 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-10 animate-fade-in-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4 backdrop-blur-md">
                <span className="text-pink-300 text-xs font-semibold tracking-widest uppercase">Creator Panel</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                Panel de Creador
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Comparte tu contenido exclusivo con la comunidad y gestiona tus suscripciones.
              </p>
            </div>

            <div className="animate-fade-in-up delay-200">
              <UploadForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SpiedOnPage
