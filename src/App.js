import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Logo from './components/logo/Logo.jsx'


function App() {
  
  return (
    <>
        <Logo/>
        <Header/>
        <Nav />
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
