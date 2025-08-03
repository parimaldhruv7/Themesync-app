
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeWrapper } from './components/ThemeWrapper';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;