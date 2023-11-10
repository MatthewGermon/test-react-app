// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavLink from './components/NavLink';
import Footer from './components/Footer';

// const jwt = require('jsonwebtoken');  // '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
// const dotenv = require('dotenv');


function App() {
  document.title = "My App"

  // dotenv.config();
  // process.env.TOKEN_SECRET;

  return (
    <div class="text-white bg-dark">
      <h1>My App</h1>
      <NavLink />
      <Footer />
    </div>
  );
}

export default App;
