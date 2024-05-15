import FooterBtn from "./FooterBtn"

export default function FooterBlock() {
    return (
        <div className="flex justify-between items-center mb-4 max-w-[990px] w-full mb-4">
            <div className="text-xs text-opacity-80 text-white font-medium">
                <span>АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від</span>
                <br/>
                <span>20.01.1994, у держреєстрі банків №226</span>
            </div>
            <div className="flex">
                <FooterBtn text="Провести розіграш" ico_src="https://send.monobank.ua/img/cup.svg" marg="mt-4" />
                <FooterBtn text="Віджет для стрімів" ico_src="https://send.monobank.ua/img/gamepad.svg" marg="ml-2 mt-4" />
            </div>
        </div>

    )
}