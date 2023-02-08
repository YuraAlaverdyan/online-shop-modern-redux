import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import { myStore } from './Pages/Store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={myStore}>
        <Navbar />
        <MyRoutes />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
