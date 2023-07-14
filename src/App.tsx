import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </div>
    </Provider>
  );
}

export default App;
