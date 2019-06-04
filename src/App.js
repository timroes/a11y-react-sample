import React from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="app__main">
        <h3 className="app__title">The News</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h2 className="app__subtitle">Appendix</h2>
          <p>
            <table>
              <tr scope="col"><th>Word</th><th>Popularity</th></tr>
              <tr><td>Lorem</td><td>67%</td></tr>
              <tr><td>magna</td><td>47%</td></tr>
              <tr><td>dolor</td><td>3%</td></tr>
            </table>
          </p>
        <h2 className="app__subtitle">Sources</h2>
        <p>
          [citation needed]
        </p>
      </main>
    </div>
  );
}

export default App;
