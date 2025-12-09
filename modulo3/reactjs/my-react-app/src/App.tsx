import Greeting from './props/Greeting';
import PromedioTresNotas from './components/PromedioTresNotasForm';
import UserCard from './props/UseCard';

function App() {

const userData = { name: "Carlos", age: 30, lastName: "Gomez", address: "Calle Falsa 123", phone: "555-1234" };

  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <PromedioTresNotas/>
      <UserCard user={userData}/>
    </>
  );
}

export default App;
