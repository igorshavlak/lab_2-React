import React, { useState, useEffect } from 'react';
import ChooseButton from './ChooseButton';


function putCursorAfterText(event) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(event.target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

export default function MoneyCard({ curState, changeCurState }) {
    const [currentValue, setNewValue] = useState(0);


    useEffect(() => {
        const inputMoneyField = document.querySelector('.inp-field');

        const handleKeyPress = (event) => {
            const isLetter = /^[a-zA-Z]$/;
            if (isLetter.test(event.key)) {
                event.preventDefault();
            }

            if (inputMoneyField.innerText.length === 1 && event.key === 'Backspace') {
                inputMoneyField.textContent = "0";
                setNewValue(0);

                event.preventDefault();
                putCursorAfterText(event);
            }

        };
        inputMoneyField.addEventListener('keydown', handleKeyPress);
        return () => {
            inputMoneyField.removeEventListener('keydown', handleKeyPress);
        };
    }, []);



    const handleButtonClick = (amount) => {
        if ((currentValue + amount) >= 30000) {
            setNewValue(29999);
        } else {
            setNewValue(currentValue + amount);
        }

    }
    useEffect(() => {
        changeCurState(currentValue);
        validate(currentValue);
    }, [currentValue]);

    const handleChange = (event) => {
        let currValue = event.target.textContent;


        if (currValue === '') {
            setNewValue(0);
            event.target.textContent = "0";
        }

        if (currValue.charAt(0) === "0") {
            let newVal = currValue.substring(1, currValue.length);
            setNewValue(parseInt(newVal));
            event.target.textContent = newVal;

        } else if (currValue > 29999) {
            setNewValue(29999);
            event.target.textContent = "29999";

        } else {
            setNewValue(parseInt(currValue));

        }


        putCursorAfterText(event);
    };

    const validate = (value) => {
        let element = document.getElementsByClassName('warn')[0];
        let input = document.getElementsByClassName('inp')[0];

        if (value < 10) {
            input.classList.add('opacity-50');
            input.classList.add('text-[#b30953]');
            element.classList.remove("hidden");
        } else {
            input.classList.remove("opacity-40");
            input.classList.remove("opacity-50");
            input.classList.remove("text-[#b30953]");
            element.classList.add("hidden");
        }
    }

    return (
        <div className="relative p-6 box-border w-[394px] bg-clip-padding border-solid border-[3px] border-transparent bg-white rounded-[24px] mt-[48px] mb-[32px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-[-3px] before:rounded-[24px] before:z-[-1] before:bg-gradient-card">
            <div className='flex justify-center text-center text-[14px] leading-4 mt-0 font-semibold'>
                Сума поповнення
                <img src="https://send.monobank.ua/img/money.png" alt="money-emojy" className='w-4 ml-[0.5em] mb-[-3px] bg-cover border-0' />
            </div>
            <div className="text-center">
                <div className='inp flex justify-center opacity-40 font-bold text-[48px] px-0 py-[20px]'>
                    <div contentEditable="true" inputMode='decimal' className='inp-field pr-[1px] outline-0'
                        onInput={handleChange}>{currentValue}</div>
                    <div className='flex whitespace-pre-wrap items-end'> ₴</div>
                </div>
                <div className="warn hidden mt-[-18px] mb-[18px] mx-4 font-normal text-[12px] leading-[1px] text-center text-[#808080]">Сума повинна бути від 10 ₴ до 29 999 ₴</div>
            </div>
            <div className="flex m-auto mt-0 w-full justify-evenly">
                <ChooseButton text="+100 ₴" onClick={() => handleButtonClick(100)} />
                <ChooseButton text="+500 ₴" onClick={() => handleButtonClick(500)} />
                <ChooseButton text="+1 000 ₴" onClick={() => handleButtonClick(1000)} />
            </div>
        </div>

    )
}



