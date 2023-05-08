import React from 'react'
import ReactDOM from 'react-dom/client'
import { ImageEditor } from './ImageEditor.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImageEditor />
  </React.StrictMode>,
)
