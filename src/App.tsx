// (c) Delta Software 2023, rights reserved.

import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzgvnhbxvkbjrjpazznm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6Z3ZuaGJ4dmtianJqcGF6em5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzg0ODcsImV4cCI6MjAxNjkxNDQ4N30.76tykVexszEqgcKgRoaFaFubIBVu8M7K1b4Rx2d4MEc'
const supabase : any = createClient(supabaseUrl, supabaseKey)

export const SupabaseContext = React.createContext<any | null>(null);

export function App({
  children,
}: {
  children?: React.ReactNode;
}) {
  
  return (
    <React.Suspense fallback={<p></p>}>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )}
      >
        <RecoilRoot>
        <SupabaseContext.Provider value={supabase}>
        <BrowserRouter>
              {children}
            </BrowserRouter>
            </SupabaseContext.Provider>
        </RecoilRoot>
      </ErrorBoundary>
    </React.Suspense>
  );
}