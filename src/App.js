import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="title">
      <h1>crud </h1>
        {/* <Create/>
        <Update/>
        <Read/> */}
      
      <Route path="/" exact component={Create} />
      <Route path="/read" exact component={Read} />
      <Route path="/update" exact component={Update} />

      

    </div>
  );
}

export default App;
