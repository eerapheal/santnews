import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page/Page';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Routess = () => {
    return (

        <Router>
        <header>
          <Header />
        </header>
  
  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Page />} />
            {/* <Route path="/lifestyle" element={<Lifestyle />} /> */}

            {/* <Route path="/treadingnews" element={<TreadingNews />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gramarlly" element={<Gramarlly />} />
            <Route path="/create" element={<Create />} /> */}
          </Routes>
          <footer>
                <Footer />
            </footer>
             </Router>
    )
}

export default Routess;
