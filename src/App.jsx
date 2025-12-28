import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <Navbar />
          <Hero />
        <About />
        <Skills/>
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
           <StarsCanvas />
        </div>
         <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
