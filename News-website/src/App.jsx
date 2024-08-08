// import BootStrapButtons from "./Components/BootStrapButtons";

import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory}></NavBar>
      <NewsBoard category={category}></NewsBoard>
    </>
  );
}

export default App;
