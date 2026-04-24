import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './pages/Home/HomePage';
import NotFound from './pages/NotFound/NotFoundPage';
import PricesPage from './pages/Prices/PricesPage';
import OrderPage from './pages/Order/OrderPage';
import FaqPage from './pages/FaqPage/FaqPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/prices' element={<PricesPage />} />
        <Route path='/order-a-ticket' element={<OrderPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/faq' element={<FaqPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
