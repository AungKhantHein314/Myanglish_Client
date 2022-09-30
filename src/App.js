import "./styles/App.css";
import UseRouter from "./route/router";
import ResponsiveAppBar from "./components/elements/AppBar/ResponsiveAppBar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <UseRouter />
    </>
  );
}

export default App;
