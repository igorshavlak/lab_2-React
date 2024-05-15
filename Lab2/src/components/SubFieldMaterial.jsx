
import React, { useState } from 'react';

export default function SubFieldMaterial() {
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
        <div className="flex max-w-[340px] w-full ml-auto mr-auto mb-4 border-[1px] border-solid border-gray-400 rounded-[16px] bg-transparent py-0 px-4 h-[56px] relative focus-within:shadow-outline">
            <div className="inline-block w-[90px] mr-4 min-h-[100px] relative group">
                <input type="tel" maxLength="2" autoComplete="cc-exp-month" inputMode="decimal" name="" id="mm" className="text-left border-none text-black h-[41px] w-full text-4 leading-6 rounded-0 mt-[12px] box-border p-0 outline-none" onChange={handleInputChange} />
                <label htmlFor="mm" className="labelInput left-0 opacity-60 text-black cursor-text max-h-[25px] absolute top-[15px] right-0 bottom-0 group-hover:top-[3px] group-hover:text-[12px] transition-all duration-100 ease">Місяць</label>
                <span></span>
            </div>
            <span className="w-[1px] bg-[#767676] opacity-20 h-[35px] relative inline-block left-[-16px] top-0 self-center m-auto text-center"></span>
            <div className="inline-block w-[90px] mr-4 min-h-[100px] relative group">
                <input type="tel" maxLength="4" autoComplete="cc-exp-year" inputMode="decimal" name="" id="yy" className="text-left border-none text-black h-[41px] w-full text-4 leading-6 rounded-0 mt-[12px] box-border p-0 outline-none" onChange={handleInputChange} />
                <label htmlFor="yy" className="labelInput left-0 opacity-60 text-black cursor-text max-h-[25px] absolute top-[15px] right-0 bottom-0 group-hover:top-[3px] group-hover:text-[12px] transition-all duration-100 ease">Рік</label>
                <span></span>
            </div>
            <span className="w-[1px] bg-[#767676] opacity-20 h-[35px] relative inline-block left-[-16px] top-0 self-center m-auto text-center"></span>
            <div className="inline-block w-[90px] min-h-[100px] relative group">
                <input type="tel" maxLength="3" inputMode="decimal" name="" id="cvc" className="text-left border-none text-black h-[41px] w-full text-4 leading-6 rounded-0 mt-[12px] box-border p-0 outline-none" onChange={handleInputChange} />
                <label htmlFor="cvc" className="labelInput left-0 opacity-60 text-black cursor-text max-h-[25px] absolute top-[15px] right-0 bottom-0 group-hover:top-[3px] group-hover:text-[12px] transition-all duration-100 ease">CVC2</label>
                <span></span>
            </div>
        </div>
    )
}