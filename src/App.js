import "./App.css";
import Nav from "./components/nav";
import Card from "./components/card";
import Logo from "./components/logo";
import Anima from "./components/animation";
import cardData from "./components/CardData";

function App() {
  //loop through
  let CardElement = cardData.map((cards) => {
    return <Card cards={cards} />;
  });
  return (
    <div className="App">
      <div className="parent">
        {/* Logo */}
        <div className="div1">
          <Logo />
        </div>
        {/* Navbar */}
        <div className="div2">
          <Nav />
        </div>
        {/* Cards */}
        <div className="div3">{CardElement}</div>
      </div>
      <Anima />
    </div>
  );
}

export default App;
