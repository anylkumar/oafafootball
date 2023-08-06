import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Coaching from "./components/coaching";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Coaching />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
