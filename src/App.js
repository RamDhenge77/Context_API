import './App.css';
import Form from './Components/Form';
import UserProvider from './Context/UserProvider';

function App() {
  return (
    <UserProvider className="App">
      <Form />
    </UserProvider>
  );
}

export default App;
