import "./App.css";
import Iphone from "./Iphone";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Abebe</h1>
      <ul>
        <li>Abebe</li>
        <li>Kebede</li>
        <li>Almax</li>
      </ul>
      <Iphone />
      <Footer />
    </div>
  );
}

export default App;
 