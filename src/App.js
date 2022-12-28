import { ThemeProvider } from "styled-components";
import Filters from "./Components/Filters";
import GlobalStyles from "./Components/styles/Global.styled";
import theme from "./Components/styles/theme.styled";

import ReactDom from "react-dom";
import SidePanel from "./Components/SidePanel";
import { useState } from "react";

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false);

  const showHandler = () => {
    setShowSidePanel(true);
  };

  const closeHandler = () => {
    setShowSidePanel(false);
  };

  const side = ReactDom.createPortal(
    <SidePanel close={closeHandler} show={showSidePanel} />,
    document.getElementById("sidePanel")
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Filters show={showHandler} />
      {side}
    </ThemeProvider>
  );
}

export default App;
