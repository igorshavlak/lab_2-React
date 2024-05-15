
export default function LeftSide({state, setState}) {
    return (
        // pt-0 pr-[20px] pb-0 pl-[20px]
        <header className="flex flex-col h-full">
            <img src="https://send.monobank.ua/img/logo_short.png" alt="Monobank" className="block mt-[42px] mr-auto mb-6 ml-auto bg-cover border-0" />
            <div className="w-auto mr-[120px] mb-[20px] ml-[120px] p-field mt-auto">
                <div className="relative text-center">
                    <img src="https://send.monobank.ua/img/jar_bg.png" alt="background" className="w-[215px] h-[215px] bg-cover border-0" />
                    <div className="bg-avatar absolute mt-[-70px] ml-32 h-14 w-14 rounded-[32px] z-[1] bg-cover bg-center"></div>
                    <div className="absolute top-[5%] left-[18%]">
                        <img className="h-[203px] w-[155px] bg-cover border-0 max-w-full" alt="glass" src="https://send.monobank.ua/img/jar/uah_100.png" />
                        <div className="absolute top-[26px] left-[13px]">
                            <img src="https://send.monobank.ua/img/jar/grid.png" alt="range" className="w-[42px] h-[168px] bg-cover border-0" />
                            <div className="relative bottom-[165px] left-[13px] font-extrabold text-[10px] text-[#8e5b5b]">25000</div>
                            <div className="relative bottom-[104px] left-[0px] font-extrabold text-[10px] text-[#8e5b5b]">12500</div>
                            <div className="relative bottom-[45px] left-[-10px] font-extrabold text-[10px] text-[#8e5b5b]">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black text-desc mt-0 mb-0 ml-[56px] mr-[56px] p-field text-center">
                <span>Сергій С. збирає</span>
            </div>
            <div className="mt-0 mb-0 ml-[56px] mr-[56px] p-field text-center">
                <h2 className="text-[1.5rem] font-bold">На поточний RUSORIZ</h2>
            </div>
            <div className="min-w-[340px] mt-0 mr-[57px] mb-0 ml-[57px] p-field">
                <div>
                    <p className="mt-[15px] text-[14px] p-field text-center">Постійна банка для закупівлі FPV.</p>
                    <p className="mt-[15px] text-[14px] p-field text-center">Наша мета - купувати хоча б 100 дронів на день та передавати швидко на фронт.</p>
                </div>
                <div className="flex justify-center mt-4 rounded-2xl bg-white mt-0 mr-auto mb-0 ml-auto text-center">
                    <div className="relative flex flex-row items-center pt-0 pr-[20px] pb-0 pl-[20px] mt-[12px] mr-0 mb-[12px] ml-0 border-r-[0.5px] border-e-gray-300">
                        <img src="https://send.monobank.ua/img/collected.svg" alt="icon" className="mr-4 w-6 h-6 min-w-6 bg-cover border-0" />
                        <div className="flex flex-col">
                            <div className="text-th text-[#808080] text-left">Накопичено</div>
                            <div className="text-t text-black text-left">{state} ₴</div>
                        </div>
                    </div>
                    <div className="relative flex flex-row items-center pt-0 pr-[20px] pb-0 pl-[20px] mt-[12px] mr-0 mb-[12px] ml-0">
                        <img src="https://send.monobank.ua/img/target.svg" alt="icon" className="mr-4 w-6 h-6 min-w-6 bg-cover border-0" />
                        <div className="flex flex-col">
                            <div className="text-th text-[#808080] text-left">Ціль</div>
                            <div className="text-t text-black text-left">1 500 000 ₴</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-[42px] text-center max-w-[430px] w-[100px] mt-auto"></div>

        </header>

    )
}