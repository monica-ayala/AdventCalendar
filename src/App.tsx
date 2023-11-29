// (c) Delta Software 2023, rights reserved.

import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

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
          <BrowserRouter>
          {children}
          </BrowserRouter>
        </RecoilRoot>
      </ErrorBoundary>
    </React.Suspense>
  );
}

// import './App.css'
// import Cat2 from './pages/Cat2'
// import { IDay } from './types/index'

// function App() {
//   const days: IDay[] = [
//     {
//       id: '1',
//       name: 'Friday',
//       password: '123',
//       letterDescription: 'M', 
//       status: 'Locked'
//     },
//     {
//       id: '2',
//       name: 'Saturday',
//       password: '456',
//       letterDescription: 'T', 
//       status: 'Locked'
//     },
//     {
//       id: '3',
//       name: 'Sunday',
//       password: '789',
//       letterDescription: 'W', 
//       status: 'Locked'
//     },
//     {
//       id: '4',
//       name: 'Monday',
//       password: 'abc',
//       letterDescription: 'T', 
//       status: 'Locked'
//     },
//     {
//       id: '5',
//       name: 'Tuesday',
//       password: 'def',
//       letterDescription: 'F', 
//       status: 'Locked'
//     },
//     {
//       id: '6',
//       name: 'Wednesday',
//       password: 'ghi',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '7',
//       name: 'Thursday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '8',
//       name: 'Friday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '9',
//       name: 'Saturday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '10',
//       name: 'Sunday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '11',
//       name: 'Monday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '12',
//       name: 'Tuesday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '13',
//       name: 'Wednesday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '14',
//       name: 'Thursday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '15',
//       name: 'Friday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '16',
//       name: 'Saturday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '17',
//       name: 'Sunday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '18',
//       name: 'Monday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '19',
//       name: 'Tuesday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '20',
//       name: 'Wednesday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '21',
//       name: 'Thursday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '22',
//       name: 'Friday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '23',
//       name: 'Saturday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '24',
//       name: 'Sunday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//     {
//       id: '25',
//       name: 'Monday',
//       password: 'jkl',
//       letterDescription: 'S', 
//       status: 'Locked'
//     },
//   ];

//   return (
//     <>
//       <Cat2/>
//     </>
//   )
// }

// export default App
