
export default function FooterBtn({text, ico_src, marg}) {
    const stl = "flex bg-[#fff] bg-opacity-5 rounded-2xl relative h-[40px] mt-2 text-[#fff] font-semibold border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-solid border-opacity-40 border-white  pl-4 pr-4 text-base flex items-center justify-center cursor-pointer transition ease-in-out duration-200 hover:bg-opacity-20  " + marg;
    return (
        <div className={stl}>
            <div className="flex items-center">
                <img src={ico_src} className=""/>
                <div className="ml-2">{text}</div>
            </div>
        </div>
    )
}