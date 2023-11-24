import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav";
import Pagina1 from "./Pages/Pagina1";
import Pagina2 from "./Pages/Pagina2";
import Pagina3 from "./Pages/Pagina3";
import Pagina4 from "./Pages/Pagina4";
import Pagina5 from "./Pages/Pagina5";


function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Pagina1/> },
      { path: "/Pagina2", element: <Pagina2/> },
      { path: "/Pagina3", element: <Pagina3/> },
      { path: "/Pagina4", element: <Pagina4/> },
      { path: "/Pagina5", element: <Pagina5/> },
    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

