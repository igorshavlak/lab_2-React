import React, { useState } from 'react';

export default function MaterialInput({ promt }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        keepMaterial(event); // Call keepMaterial with event
    };

    const keepMaterial = (event) => {

        let parentDiv = event.target.parentElement; // Use event.target instead of event
        let labelElement = parentDiv.querySelector('.labelInput');

        if (inputValue === '') {
            labelElement.classList.remove('top-[3px]');
            labelElement.classList.add('text-material');
        } else {
            labelElement.classList.add('top-[3px]');
            labelElement.classList.add('text-material');
        }
    };

    return (
        <div className="max-w-[340px] w-full ml-auto mr-auto mb-4 border-[1px] border-solid border-gray-400 rounded-[16px] bg-transparent py-0 px-4 h-[56px] relative focus-within:shadow-outline group transition-all duration-100 ease-in">
            <input
                type="text"
                name="username"
                id="name"
                className="normal-case text-left border-0 text-black h-[41px] w-full text-4 leading-6 rounded-0 mt-3 box-border p-0 outline-none"
                value={inputValue}
                onChange={handleInputChange}
            />
            <label
                htmlFor="name"
                className="labelInput opacity-60 text-black cursor-text max-h-[25px] text-left text-[16px] leading-6 flex justify-start absolute top-[15px] left-[15px] right-0 bottom-0 group-hover:top-[3px] group-hover:text-[12px] transition-all duration-100 ease"
            >
                {promt}
            </label>
            <span className="err"></span>
        </div>
    );
}



