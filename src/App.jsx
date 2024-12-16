import Content from "./components/Content";
import Header from "./components/header/Header";
import "./styles/main.scss"; // Adjust the path based on your project structure

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Content />
      </div>
    </>
  );
}

export default App;
