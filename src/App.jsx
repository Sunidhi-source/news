import { Outlet } from "react-router"
import Header from './Components/Header.jsx'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
