import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import GithubUser from "./pages/GithubUser"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":user" element={<GithubUser />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
