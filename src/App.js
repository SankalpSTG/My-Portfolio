import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDLiF7s4y7RATxOQLFN8mxIg4n0mxtGi0",
  authDomain: "sankalp-pol.firebaseapp.com",
  projectId: "sankalp-pol",
  storageBucket: "sankalp-pol.appspot.com",
  messagingSenderId: "772789006597",
  appId: "1:772789006597:web:f32502842b11db93a5876c"
};

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
