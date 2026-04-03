import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
  const scrollPos = sessionStorage.getItem('scrollPosition');
  if (scrollPos) {
    setTimeout(() => window.scrollTo(0, parseInt(scrollPos)), 100);
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
