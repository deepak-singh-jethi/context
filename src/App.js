import "./App.css";
import Hello from "./Components/Hello";
import Hii from "./Components/Hii";
// import CricketProvider from "./context/CricketProvider";
function App() {
  return (
    <div className="App">
      {/* <CricketProvider>
        <Hello />
        <hr />
        <Hii />
      </CricketProvider> */}
      <Hello />
      <hr />
      <Hii />
    </div>
  );
}

export default App;
