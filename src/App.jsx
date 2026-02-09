import { RouterProvider } from 'react-router-dom'
import './App.css'
import { mainRouter } from './router'

function App() {
  return <RouterProvider router={mainRouter} />
}

export default App
