import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Register from "./features/register/Register"
import Login from "./features/login/Login"
import Home from "./components/home/Home"

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
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
