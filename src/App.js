import React, { useState, useEffect } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CancelIcon from "@material-ui/icons/Cancel";

import itemService from "./services/items";
import "./index.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from "./Views/HomeView";
import ItemsView from "./Views/ItemsView";
import BasketView from "./Views/BasketView";
import ViewReceipt from "./Views/ViewReceipt";


const App = () => {

  const onMenuClickOpen = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const onMenuClickClose = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={() => onMenuClickOpen()}>
              <DehazeIcon fontSize="large" />
            </button>
            <Link to="/">Shopping Land</Link>
          </div>
          <div className="header-links">
            <a href="index.html">My Cart</a>
            <a href="index.html">Log In</a>
          </div>
        </header>
        <aside className="sidebar">
          
          <h3>Shopping Categories</h3>
          <button
            className="sidebar-close-button"
            onClick={() => onMenuClickClose()}
          >
            <CancelIcon fontSize="large" />
          </button>
          <ul>
            <li>
              <a href="index.html">Trousers</a>
            </li>

            <li>
              <a href="index.html">Vests</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route
              exact
              path="/item/:id"
              component={ItemsView}
            />
            <Route exact path="/" render={() => <HomeView  />} />
            <Route exact path="/pdf" render={() => <ViewReceipt  />} />
            <Route
              exact
              path="/basket/:id?"
              component={BasketView}
            />
          </div>
        </main>
        <footer className="footer">at All rights reserved.</footer>
      </div>
    </BrowserRouter>

  );
};

export default App;
