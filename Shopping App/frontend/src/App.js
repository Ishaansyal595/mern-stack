import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import products from "./products";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="my-3">
          {/* <h2>Home Screen</h2> */}

          {/* Home screen products list */}
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
              exact
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
