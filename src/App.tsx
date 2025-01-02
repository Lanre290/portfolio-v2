import './App.css'
import Styling from './components/style'
import Header from './components/header'
import Bio from './components/bio'
import Certifications from './components/certifications';
import './index.css'
import Skills from './components/skills'
import Services from './components/services'
import Projects from './components/projects';
import Footer from './components/footer';


function App() {
  return (
    <>
      <div className='overflow-x-hidden overflow-hidden'>
        <Styling></Styling>

        <Header></Header>
        <div className='flex flex-wrap justify-center'>
          <Bio></Bio>
          <Services></Services>
          <Skills></Skills>
          <Certifications></Certifications>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>

    </>
  )
}

export default App
