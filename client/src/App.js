import React from "react";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <Route exact path="/products/">
                    <Main />
                </Route>
                <Route exact path="/products/:id">
                    <Detail />
                </Route>
                <Route path="/products/edit/:id">
                    <Update />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
