import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Textcardbox from "../textcardbox";

function Tabsection() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mt-5 mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        <Textcardbox setOrder="one" />
        <Textcardbox setOrder="two" />
        <Textcardbox setOrder="one" />
        <Textcardbox setOrder="two" />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Textcardbox setOrder="one" />
        <Textcardbox setOrder="two" />
        <Textcardbox setOrder="one" />
        <Textcardbox setOrder="two" />
      </Tab>
    </Tabs>
  );
}

export default Tabsection;
