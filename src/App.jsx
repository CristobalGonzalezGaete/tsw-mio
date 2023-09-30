import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { QueryClient, QueryClientProvider } from "react-query";
import Home from './Pages/Home'
import { BrowserRouter } from 'react-router-dom';
import RouterApp from '../router';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouterApp/>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
