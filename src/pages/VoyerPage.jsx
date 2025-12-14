
import { useEffect } from 'react'
import Header from '../components/common/Header'

const VoyerPage = () => {
  useEffect(() => {
    // Inject CSS
    const link = document.createElement('link')
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Inject Custom Styles for Premium Look
    const style = document.createElement('style')
    style.innerHTML = `
      :root {
        --chat--color-primary: #6366f1; /* Indigo-500 */
        --chat--color-secondary: #4f46e5; /* Indigo-600 */
        --chat--window--width: 100%;
        --chat--window--height: 100%;
        --chat--header--background: transparent;
        --chat--header--color: #fff;
        --chat--message--bot--background: #1f2937; /* Gray-800 */
        --chat--message--bot--color: #f3f4f6; /* Gray-100 */
        --chat--message--user--background: #6366f1;
        --chat--message--user--color: #fff;
        --chat--input--background: #111827; /* Gray-900 */
        --chat--input--color: #f3f4f6;
      }

      #n8n-chat-container .chat-window {
        font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
        border-radius: 1rem !important;
        overflow: hidden !important;
        box-shadow: none !important; /* Managed by container */
      }
      
      /* Intentional broad targeting to catch elements if variables fail */
      #n8n-chat-container button {
        border-radius: 0.5rem !important;
        font-weight: 500 !important;
        transition: all 0.2s ease !important;
      }
      
      #n8n-chat-container input, #n8n-chat-container textarea {
        border-radius: 0.5rem !important;
        background-color: rgba(255, 255, 255, 0.05) !important;
        color: white !important;
      }

      /* Custom Professional Typing Indicator */
      /* Custom Professional Typing Indicator */
      .chat-message-typing-body {
        align-items: center !important;
        justify-content: flex-start !important;
        display: flex !important;
        padding: 8px 0 !important;
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
        width: auto !important;
        height: auto !important;
        margin: 0 !important;
      }

      .chat-message-typing-circle {
        background-color: #6366f1 !important; /* Indigo-500 */
        width: 6px !important;
        height: 6px !important;
        margin: 0 3px !important;
        border-radius: 50% !important;
        animation: typingPulse 1.4s infinite ease-in-out both !important;
        opacity: 0.7;
      }

      .chat-message-typing-circle:nth-child(1) { animation-delay: -0.32s !important; }
      .chat-message-typing-circle:nth-child(2) { animation-delay: -0.16s !important; }
      
      @keyframes typingPulse {
        0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
        40% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px rgba(99, 102, 241, 0.6); }
      }
    `
    document.head.appendChild(style)

    // Inject JS
    const script = document.createElement('script')
    script.type = 'module'
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'http://localhost:5678/webhook/contract',
        target: '#n8n-chat-container',
        mode: 'fullscreen',
        initialMessages: [
          'Hola, soy Voyer. ¿Cómo puedo ayudarte?'
        ],
        i18n: {
          en: {
            title: 'Voyer',
            subtitle: 'Asistente Inteligente',
            footer: '',
            getStarted: 'Iniciar conversación',
            inputPlaceholder: 'Escribe tu mensaje aquí...',
          }
        },
        showWelcomeScreen: false, /* Skip welcome screen for immediate chat feeling */
      });
    `
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(style)
      document.body.removeChild(script)
      // Cleanup chat container
      // The widget might inject elements, but since we are unmounting the container div, it should be fine.
      // However, n8n widget might leave global styles or elements attached to body if not carefully handled.
      // The target '#n8n-chat-container' is inside this component, so it disappears on unmount.
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white relative overflow-hidden font-inter">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="z-10 relative flex-1 flex flex-col">
        <Header showBackButton={true} className="bg-transparent border-b border-white/5 backdrop-blur-sm sticky top-0" />

        <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="w-full max-w-5xl h-[80vh] relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div id="n8n-chat-container" className="w-full h-full relative z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default VoyerPage
