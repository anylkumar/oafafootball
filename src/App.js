import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Coaching from "./components/coaching";
import Footer from "./components/footer";
import Textcardbox from "./components/textcardbox";
import Tabsection from "./components/tabsection";
import Otherpage from "./components/otherpages";
import Firstbanner from "./components/firstbanner";

function App() {
  return (
    <div className="App">
      <Header />
      <Firstbanner imageTitle="Crafting Football Stars of Tomorrow" />
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
