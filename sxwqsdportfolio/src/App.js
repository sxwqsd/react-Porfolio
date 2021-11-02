import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About'

const categories = [
  {
    name: "Works",
    description:
      "Links to projects I've led or been apart of.",
  },
  { name: "Resume", description: "For a more in dept tellign of my expierience" },
 
];

function App() {
  return (
    <div>
      <Nav></Nav>
       <main>
        <About></About>

      </main>
    </div>
  );
}

export default App;
