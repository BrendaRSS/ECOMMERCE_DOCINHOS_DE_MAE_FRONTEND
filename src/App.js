import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/style/GlobalStyle";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import MenuPage from "./pages/menuPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
   <BrowserRouter>
   <GlobalStyle />
   <Header/>
   <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cardapio" element={<MenuPage />} />
        <Route path="/pedido" element={<OrderPage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
