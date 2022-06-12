import Navbar from "./components/Header/Navbar";
import DropdownMenu from "./components/Header/DropdownMenu";
import NavItem from "./components/Header/Navitem";
import Header from "./components/Header/Header";
import React from "react";
import Carousel from "./components/Carousel/Carousel";
import { SliderData } from "./components/Carousel/CarouselData";
import ArticleGrid from "./components/Articles/ArticleGrid";
import "./components/SearchBar/searchbar.css";
import "./components/Articles/article.css";
import "./components/Footer/footer.css";
import "./components/queries.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Navbar>
        <NavItem icon={"X"}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <Carousel slides={SliderData} />
      <ArticleGrid></ArticleGrid>
      <Footer></Footer>
    </div>
  );
}

export default App;
