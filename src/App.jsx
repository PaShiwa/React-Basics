import Conditional from "./components/Conditional";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Button from "./components/Button";
import Form from "./components/Form";
function App() {
  const person = {
    name: "Pawan",
    message: "Hi there!",
    emoji: "😊",
    seatNumbers: [1, 2, 3, 5],
  };
  return (
    <div className="App">
      <Hello props={person} />
      <Fruits />
      <Conditional />
      <Message />
      <Button />
      <Form />
    </div>
  );
}
export default App;
