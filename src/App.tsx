import {Routes,Route} from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />}/>
      </Route>
    </Routes>
  )
}

export default App
