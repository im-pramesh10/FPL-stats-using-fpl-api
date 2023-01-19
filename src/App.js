import './App.css';
import Search from './components/search';
import SearchDisplay from './components/searchDisplay';

function App() {
  return (
      <div className="App">
        <div className="header-wrapper">
          <h1 className="title">
            WELCOME
          </h1>
          <h1 className="title">
            TO
          </h1>
          <h2 className="title">
            FPL STATISTICS
          </h2>
        </div>
        <Search/>
        <SearchDisplay/>
    </div>
  );
}

export default App;
