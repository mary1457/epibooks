


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import MyFooter from './components/MyFooter'
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main> 
        <Welcome />
        <Container fluid >
        <AllTheBooks />
        </Container>
      </main>
      <footer>
      <MyFooter />
      </footer>
     
    </>
  )
}

export default App
