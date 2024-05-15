
import { useState } from "react"
import Block from "./Block"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function Canvas(){
    let value = 0;
    if (localStorage.getItem('current_money') != null) {
        value = localStorage.getItem('current_money');
    }

    const [amountOfMoney, changeMoney] = useState(value);
    
    return (
        <div className="flex rounded-3xl overflow-hidden max-w-[990px] min-h-[680px] w-full mt-[80px] mb-4">
            <Block bg_color="bg-[#f3f4f6]">
                <LeftSide  state={amountOfMoney} setState={changeMoney} />
            </Block>
            <Block bg_color="bg-[#fff]">
                <RightSide state={amountOfMoney} setState={changeMoney} />
            </Block>
        </div>
        
    )
}