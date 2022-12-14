import Header from "./components/Header";
import { Container } from "react-bootstrap"
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path='/' component={Homescreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
