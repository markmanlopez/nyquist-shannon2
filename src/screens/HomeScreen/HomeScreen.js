import React from "react";
import "./HomeScreen.style.css";
import Header from "../../components/Header/Header";
import FolderDialog from "../../components/FolderDialog/FolderDialog";
import Canvas from "../../components/canvas/Canvas";
import Footer from "../../components/footer/Footer";
import HomeScreenText from "../../components/text/HomeScreenText";

function HomeScreen() {
  return (
    <body>
      <Header />
      {/* <HomeScreenText /> */}
      <div class="container">
        <FolderDialog />
      </div>
      <div class="container">
        <Canvas />
      </div>
      <Footer />
    </body>
  );
}

export default HomeScreen;
