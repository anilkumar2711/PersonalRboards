import React, { useState, useRef, useEffect } from 'react';

const Dropdown = (props) => {
  const { options, placeholder, hasDropIcon=true,optionTag="button",tarnsperent=true } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 ${tarnsperent?'':'bg-white border border-gray-300 '}text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {selectedOption ? selectedOption.label : placeholder}
          {
             hasDropIcon && <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.793l3.71-3.61a.75.75 0 111.04 1.08l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
           </svg>
          }
        </button>
      </div>

      {isOpen && (
        <div className={"absolute right-0 z-10 mt-2 w-full min-w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              optionTag=="button"?
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="whitespace-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                {option.label}
              </button>:
              <a className="whitespace-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" href={option.value} >{option.label}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;