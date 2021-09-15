import React from "react";
import Main from "./views/Main";
import Detail from "./views/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/products/">
                    <Main />
                </Route>
                <Route exact path="/products/:id">
                    <Detail />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
