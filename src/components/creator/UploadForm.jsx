import { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import TagInput from './TagInput'

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    files: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // En MVP esto no hace nada, solo visual
    console.log('Formulario enviado:', formData)
  }

  const handleTagsChange = (newTags) => {
    setFormData({ ...formData, tags: newTags })
  }

  return (
    <Card className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 !shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="p-2 rounded-lg bg-pink-500/20 text-pink-400">📝</span>
        Nueva Publicación
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre de publicacion */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Nombre de la publicación
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Ej: Tutorial de fotografía nocturna"
            disabled={true}
            className="w-full bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all cursor-not-allowed opacity-70"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Tags
          </label>
          <TagInput
            tags={formData.tags}
            onTagsChange={handleTagsChange}
            disabled={true}
          />
        </div>

        {/* Upload de contenido */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Contenido
          </label>
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center bg-white/5 hover:border-pink-500/30 hover:bg-white/10 transition-all cursor-not-allowed opacity-60">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl">📁</span>
              </div>
              <p className="text-slate-200 font-medium">
                Arrastra archivos aquí o haz clic para seleccionar
              </p>
              <p className="text-sm text-slate-500">
                Imágenes (JPG, PNG, GIF) o Videos (MP4, MOV)
              </p>
            </div>
          </div>
          <p className="text-xs text-pink-400/80 mt-2 flex items-center gap-1">
            ⚠️ El upload de archivos no es funcional en esta versión MVP
          </p>
        </div>

        {/* Boton publicar */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={true}
            className="w-full text-lg py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-none shadow-lg shadow-pink-500/20 text-white font-semibold rounded-xl"
          >
            Publicar Contenido
          </Button>
          <p className="text-xs text-slate-500 text-center mt-3">
            La publicación no es funcional en esta versión MVP
          </p>
        </div>
      </form>
    </Card>
  )
}

export default UploadForm
