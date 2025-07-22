// (c) Delta Software 2023, rights reserved.

import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wrqvpztjfljfgwshdcst.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndycXZwenRqZmxqZmd3c2hkY3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTUxOTQsImV4cCI6MjA2ODY3MTE5NH0.pDKNKHMNsnZRiQIC3NCrNblfxTmoO1Gjh6JtBt0b0kk'
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
