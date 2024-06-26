import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./Componentes/Home";
import Error404 from "./Componentes/Error404";
import Nav from "./Componentes/Nav";
import Rey from "./Componentes/Rey";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/reyes/:rey" element={ <Rey /> }/>
                <Route path="*" element={ <Error404 /> }/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;