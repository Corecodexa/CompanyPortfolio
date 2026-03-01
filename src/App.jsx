import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Project from './pages/Project';
import Service from './pages/Service';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden bg-white text-gray-900">
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
      { path: 'about', element: <div>About Us Page</div> },
      { path: 'service', element: <Service /> },
      { path: 'project', element: <Project /> },
      { path: 'team', element: <Team /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;