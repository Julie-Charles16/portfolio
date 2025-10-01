// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import ButtonDark from './components/button-dark'
// import Navbar from './components/navbar'
// import Title from './components/title'

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex flex-1 items-center justify-center px-10">
//         <div className="flex flex-row items-center gap-60">
//           <div className="flex flex-col justify-center">
//             <Title title="JULIE" tag="h1" className="text-8xl font-bold leading-tight" />
//             <Title title="CHARLES" tag="h1" className="text-8xl font-bold leading-tight" />
//             <div className="mt-2">
//               <Title title='entre lignes de code et lignes de vie,' tag='h2' className='text-4xl leading-snug' />
//               <Title title='un parcours réécrit en HTML.' tag='h2' className='text-4xl leading-snug' />
//             </div>
//             <div className="mt-6">
//               <a href="./CV-Julie.Charles.pdf" download="CV-Julie.Charles.pdf" target='_blank'>
//               <ButtonDark icon="./img/download.png" text='CV'/>
//               </a>
//             </div>
//           </div>
//           <img
//             src="./img/Me.png"
//             alt="mon avatar"
//             className="w-[400px] h-[400px] object-cover rounded-full ml-24"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes' // <- si tu le mets dans un fichier à part, sinon garde la déclaration ici
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
