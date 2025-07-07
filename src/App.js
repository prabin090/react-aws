import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is a simple React application . It is deployed on AWS S3 using GitHub Actions.
        </p>
        
      </header>
    </div>
  );
}

export default App;
