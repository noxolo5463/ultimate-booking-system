import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/home/home'
import { lazy } from 'react';

const CustomerComponent = lazy(async () => await import('customer/customer'));
const BusinessComponent = lazy(async () => await import('business/business'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/*" element={<CustomerComponent />} />
        <Route path="/business/*" element={<BusinessComponent />} />
      </Routes>
    </div>
  )
}

export default App
