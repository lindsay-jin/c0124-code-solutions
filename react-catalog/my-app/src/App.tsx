import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header';
import { Catalog } from './Pages/Catalog';
import { Details } from './Pages/Details';
import { About } from './Pages/About';
import { NotFound } from './Pages/NotFound';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
