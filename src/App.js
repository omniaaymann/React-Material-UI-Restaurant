// import './App.css';
import {Navbar} from './Components/Navbar'
import {Header} from './Components/Header'
import {Cards} from './Components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Header/>
      <Cards/>
      </header>
    </div>
  );
}

export default App;
