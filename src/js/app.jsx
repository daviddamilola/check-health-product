import React from "react";
import { Search, ProductInfo } from './containers'
import "../sass/app.scss";



const App = () => {
  return(
      <React.Fragment>
        <header className="navbar">Healthy You</header>
        <section className="">
            <Search />
            <ProductInfo />
        </section>
        <footer className="footer">Oluwasusi David</footer>
      </React.Fragment>
    );
}

export default App;