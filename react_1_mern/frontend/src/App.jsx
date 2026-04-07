import { Route,Routes } from "react-router"
import Home from "./Pages/Home"
import CreateNote from "./Pages/CreateNote"
import NotePage from "./Pages/NotePage"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreateNote/>}/>
      <Route path="/note/:id" element={<NotePage/>}/>
    </Routes>
    </>
  )
}

export default App