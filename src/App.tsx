import {Routes,Route} from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import NewConnection from "./pages/NewConnectionOne"
import Cartable from "./pages/Cartable"
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />}/>
        <Route path="new-connection" element={<NewConnection />}/>
        <Route path="/cartable" element={<Cartable />}/>
      </Route>
    </Routes>
  )
}

export default App
