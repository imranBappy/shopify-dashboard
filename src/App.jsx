import { BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout/Layout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Layout>
          <Dashboard />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
