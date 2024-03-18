import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Register from "./features/register/Register"
import Login from "./features/login/Login"
import Home from "./components/home/Home"
import TeacherDashboard from "./components/dashboard/TeacherDashboard"
import TeacherBiodata from "./features/biodata/TeacherBiodata"
import TeacherChangePassword from "./features/changePassword/TeacherChangePassword"
import DynamicCircular from "./features/dynamicCircular/DynamicCircular"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='registration' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='teacher-dashboard' element={<TeacherDashboard/>}/>
          <Route path='ganti-password' element={<TeacherChangePassword/>}/>
          <Route path='biodata' element={<TeacherBiodata/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
