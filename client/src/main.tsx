import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={App} />
)
