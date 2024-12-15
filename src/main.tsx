import '@shopify/polaris/build/esm/styles.css'
import './index.css'

import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </StrictMode>
)
