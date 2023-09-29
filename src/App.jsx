import Header from './shared/components/app/Header'
import Footer from './shared/components/app/Footer'
import Home from './pages/home/Home'
import styles from './App.module.scss';
import NavBar from './shared/components/app/NavBar';
import { useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false); 

  const open = (data) => {
  setIsOpen(data);
  }

  
  return (
    <div className={styles.layout}>
      {!isOpen ? <Header props={open} /> : <NavBar props={open} />}
      <Home/>
      <Footer/>
     
    </div>
  )
}

export default App;
