import Header from './shared/components/app/Header'
import Footer from './shared/components/app/Footer'
import Home from './pages/home/Home'


function App() {
  return (
    <div className='bg-header bg-no-repeat bg-cover max-w-screen-2xl'>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App;
