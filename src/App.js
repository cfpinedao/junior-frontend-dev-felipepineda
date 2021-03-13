import './App.css';
import Form from './components/Form'
import Label from './components/Label'
import List from './components/List';

function App() {
  return (
    <div className="container">
   
        <div className="cont-titulo">
          <Label text="Registro de usuarios" />
        </div>
        <Form />
        <List />


      
    </div>

  );
}

export default App;
