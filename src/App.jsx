import './App.scss';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {

  return (
    <>
      <div className='page-wrapper page-overlay'>
        <Header />
        <RouterProvider router={ router } />
        <Footer />
      </div>
    </>
  )
}

export default App
