
import React, { Component, lazy, Suspense } from 'react';

import "./App.css";

const MyComp = lazy(() => import('./components/myComp'));

class App extends Component {
  static render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>another component</div>
          <Suspense fallback={<div>Loading.....</div>}>
            <MyComp />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
