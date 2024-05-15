
export default function ChooseButton({text, onClick}) {
    return (
        <div className="bg-white border-[1px] border-solid border-gray-300 rounded-[16px] py-0 px-[3px] text-center my-0 mx-[8px] cursor-pointer min-h-[40px] flex flex-col items-center justify-center grow shrink basis-0 select-none hover:bg-[#cccccc78]"
        onClick={onClick}>
            <div>{text}</div>
        </div>
    )
}