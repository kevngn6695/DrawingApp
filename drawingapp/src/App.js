import "./assets/styles/app.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
