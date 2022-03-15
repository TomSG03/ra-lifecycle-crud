import './App.css';

import Crud from './Crud/Crud';

function App() {
  const url = 'http://localhost:7777/notes';

  return (
    <div className="App">
      <Crud url={url}/>
    </div>
  );
}

export default App;
