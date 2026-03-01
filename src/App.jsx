import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';


const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
