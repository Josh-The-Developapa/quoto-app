import { Route, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes.js';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </React.Fragment>
  );
}

export default App;
