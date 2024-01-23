import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { store } from './store/index.ts'
import { Provider } from "react-redux"

import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
