import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Error from './Components/Error/Error'
import TitleWrapper from './Components/TitleWrapper/TitleWrapper'

function App() {
  let routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
      {index:true, element:<TitleWrapper title="home"><Home/></TitleWrapper>},
      {path:'about', element:<TitleWrapper title="about"><About/></TitleWrapper>},
      {path:'portfolio', element:<TitleWrapper title="portfolio"><Portfolio/></TitleWrapper>},
      {path:'contact', element:<TitleWrapper title="contact"><Contact/></TitleWrapper>},
      {path:'*', element:<TitleWrapper title="Page Not Found"><Error/></TitleWrapper>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
