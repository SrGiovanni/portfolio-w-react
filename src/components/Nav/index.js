import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
    // contactSelected,
    // setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          John Fulghieri
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${ currentCategory.name === "about me" && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => {
                //setContactSelected(false)
                setCurrentCategory(categories[1])
            }}>
              About me
            </a>
          </li>
          {categories.slice(2).map((category) => (
              <li
              className={`mx-1 ${
                  //!contactSelected  &&
                currentCategory.name === category.name &&  'navActive'
                }`}
              key={category.name}
            >
              <span onClick={() => {
                  setCurrentCategory(category);
                  //setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          {/* <li className={`mx-2 ${ currentCategory.name === "contact" && 'navActive'}`}>
            <span onClick={() => {
                // contactSelected 
                //setContactSelected(true)
                setCurrentCategory(categories[1])
            }}>
                Contact
            </span>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;