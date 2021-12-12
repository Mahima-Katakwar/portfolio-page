import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Route, BrowserRouter } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" componenet={LandingPage} exact />
      <Route path="/mynotes" componenet={() => <MyNotes />} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;

