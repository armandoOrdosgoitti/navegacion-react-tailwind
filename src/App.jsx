import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { NoPage } from './pages/NoPage'
import { User } from "./pages/User";
import { Portfolio } from "./pages/Portfoio";
import { Blog } from "./pages/Blog";
import { Resume } from "./pages/student";
import { Contact } from "./pages/Contac";
/* NAVEGANDO */
import { Navigation } from "./components/Navigation";
export const App = () => {
  return (

    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="resume" element={<Resume />} />
        <Route path="Contact" element={<Contact />} />

        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
    


  )
}







