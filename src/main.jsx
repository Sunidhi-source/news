import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import News from './News.jsx'
import SearchNews from './SearchNews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<App />}>
      <Route index element={<News />} />
      <Route path="news/:category" element={<News />} />
      <Route path="search/:query" element={<SearchNews />} />
      </Route>

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
