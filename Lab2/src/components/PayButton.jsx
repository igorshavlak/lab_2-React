
import React, {useEffect} from "react";

export default function PayButton({url, state, setState, value}) {

    useEffect(() => {
        localStorage.setItem('current_money', state);

    }, [state]);
    return (
        <div className="flex cursor-pointer h-12 my-0 mx-auto w-[340px] rounded-[8px] bg-black overflow-hidden mb-4 select-none hover:opacity-80"
        onClick={() => setState(state + value)}>
            <img src={url} alt="payment" className="cursor-pointer select-none h-[26px] m-auto bg-cover border-none" />
        </div>
    )
}