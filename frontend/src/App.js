import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <BrowserRouter>
     <Header />
     <main className='background'>
   
   
      <Container>
        <Routes>
          <Route>
          <Route path='/' element={<HomeScreen />}exact/>
          </Route>
        </Routes>
      </Container>
    

    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
