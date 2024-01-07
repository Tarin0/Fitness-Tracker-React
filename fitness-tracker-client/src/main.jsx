import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
import Container from './Shared/Container';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
