import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout'; 

import Home from './routes/home';
import Sobre from './routes/sobre';
import Contato from './routes/contato';
import Faq from './routes/faq';
import Integrantes from './routes/integrantes'; 
import Error from './routes/error';

function App() {
  return (
    <Routes>
      {}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="faq" element={<Faq />} />
        <Route path="integrantes" element={<Integrantes />} />
      </Route>
      
      {}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App;