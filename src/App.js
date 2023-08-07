import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Coaching from "./components/coaching";
import Footer from "./components/footer";
import Textcardbox from "./components/textcardbox";
import Tabsection from "./components/tabsection";
import Otherpage from "./components/otherpages";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Coaching />
      <Banner />
      <Textcardbox setOrder="one" />
      <Textcardbox setOrder="two" />
      <Textcardbox setOrder="one" />
      <Textcardbox setOrder="two" />
      <Tabsection />
      <Otherpage />
      <Footer />
    </div>
  );
}

export default App;
