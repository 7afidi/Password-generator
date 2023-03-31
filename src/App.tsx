import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form />  
      </div>
    </div>
  );
}

export default App;
