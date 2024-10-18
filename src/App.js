import { Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout";
import BlogsPage from "./BlogsPage";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Singleproduct from "./Singleproduct";
import Footer from "./Footer";
import {
  Container,
  Button,
  Link,
  darkColors,
  lightColors,
} from "react-floating-action-button";
function App() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <main>
      <span className="floatindex">
        <Container className="floatindex z-index">
          <Link
            href="tel:+917019797893"
            styles={{
              backgroundColor: darkColors.blue,
              color: lightColors.white,
            }}
            className="floatindex  "
            tooltip="Call Now!!"
            icon="fa fa-phone"
          />
          <Link
            className="fab-item btn btn-link btn-lg text-white floatindex z-index fs-1"
            href="//api.whatsapp.com/send?phone=917019797893&text=Hi!, I have a query regarding "
            target="_blank"
            styles={{
              FontSize: 50,
              backgroundColor: darkColors.green,
              color: lightColors.white,
            }}
            tooltip="Get in touch!!"
            icon="fab fa-whatsapp"
          />

          <Button
            className="floatindexx btn btn-lg"
            tooltip="Contact Us"
            icon="fa fa-phone"
            styles={{
              backgroundColor: darkColors.blue,
              color: lightColors.white,
            }}
            rotate={false}
          />
        </Container>
      </span>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/products" component={ProductPage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/product/:category/:product" component={Singleproduct} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
