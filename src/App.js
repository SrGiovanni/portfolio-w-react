import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import ContactForm from './components/Contact';
import About from './components/About';
import Showcase from './components/Showcase';

function App() {

  const [categories = []] = useState([
    { name: 'sacrificial state'},
    { name: 'about me'}, 
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ])
  console.log(categories)

  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      /* contactSelected={contactSelected}
        setContactSelected={setContactSelected} */
      />
      <main>
        { currentCategory.name = 'about me' &&
          <>
            <About />
          </>}
        { currentCategory.name = 'portfolio' &&
          <>
            <Showcase />
          </>
        }
        { currentCategory.name = 'contact' &&
          <>
            <ContactForm />
          </>
        }
        { currentCategory.name = 'resume' && 
          <></>
        } 
      </main>
      <footer>
          <a alt="github profile" href='https://github.com/SrGiovanni'><img alt='github logo'/></a>
          <a alt="linkedin profile" href='https://www.linkedin.com/in/john-samuel-fulghieri-53b418105/' ><img alt="linkedin logo"></img></a>
      </footer>
    </div>
  );
}

export default App;
