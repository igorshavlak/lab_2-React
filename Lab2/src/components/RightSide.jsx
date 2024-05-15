
import MoneyCard from "./CardBlock"
import MaterialInput from "./MaterialButton"
import PayButton from "./PayButton"
import SubFieldMaterial from "./SubFieldMaterial"
import React, {useState} from 'react';

export default function RigthSide({state, setState}){
    const [curValue, changeValue] = useState(0);
    return (
        <div className="z-0 relative flex flex-col items-center bg-white min-h-[620px]">
            <MoneyCard curState={curValue} changeCurState={changeValue} />
            <MaterialInput promt="Ваше ім'я (необов'язково)" />
            <MaterialInput promt="Коментар (необов'язково)" />
            <PayButton url="https://send.monobank.ua/img/mono_pay.svg" state={state} setState={setState} value={curValue}/>
            <PayButton url="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" state={state} setState={setState} value={curValue}/>
            <div className="flex flex-col w-full mx-6 box-border max-w-[340px] mb-[42px] base">
                <div className="mt-6 mb-[8px] border-t-[0.5px] border-solid border-t-gray-300"></div>
                <div className="flex font-semibold text-[14px] leading-6 text-center p-[8px] cursor-pointer bg-transparent text-[#e85e5b] items-center justify-center w-full box-border rounded-[8px]" onClick={openSection}>
                    <img src="https://send.monobank.ua/img/card.svg" alt="Credit Card" className="w-4 h-4 mr-[8px] bg-cover border-none"/>
                    <div>Оплатити карткою</div>
                </div>
            </div>
            <div className="extend hidden">
                <div className="w-[346px] flex items-center my-6 mx-auto font-medium text-[14px] leading-6">
                    <div className="grow border-t-[0.5px] border-solid border-t-gray-300"></div>
                    <div className="py-0 px-4 font-medium">або уведіть дані картки</div>
                    <div className="grow border-t-[0.5px] border-solid border-t-gray-300"></div>
                </div>
                <div>
                    <MaterialInput promt="Номер картки" />
                </div>
                <div>
                    <SubFieldMaterial />
                </div>
                <div className="p-0 border-none max-w-[346px] w-full mb-[42px] h-[56px]">
                    <button disabled className="border-none bg-none opacity-40 cursor-not-allowed pointer-events-none min-h-full w-full relative font-bold text-4 leading-6 outline-none rounded-[16px] bg-[#fb5155] text-white">
                        <span>Поповнити банку</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function openSection() {

    let ext = document.getElementsByClassName('extend')[0];
    let base = document.getElementsByClassName('base')[0];

    base.classList.add("hidden")
    ext.classList.remove("hidden");
    
}