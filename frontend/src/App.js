import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);
export default App;
