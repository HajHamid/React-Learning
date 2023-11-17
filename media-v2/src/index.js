import React from 'react'
import { createRoot } from 'react-dom/client'
import "bulma/css/bulma.css";
import App from './App'

const el = document.getElementById('root')
const root = createRoot(el)

root.render(<App />)