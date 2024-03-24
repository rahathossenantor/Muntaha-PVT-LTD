import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation mainContent={
        <Outlet></Outlet>
      } />
    </>
  );
};

export default App;
