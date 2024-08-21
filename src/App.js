import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {useState} from "react"



 const App = () => {

  const [modal, setModal] = useState(true)

  return (

    <div>
      {modal && <Modal setModal={setModal}/>}
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial/>
      <Contact/>
      <Footer/>

    </div>

  )
}


export default App;