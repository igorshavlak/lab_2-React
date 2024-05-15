
import Canvas from "./components/Canvas"
import FooterBlock from "./components/FooterBlock"


export default function MonoJar(){
    return (
        <div className="flex flex-col items-center justify-center align bg-gradient-mono w-full h-full">
            <Canvas />
            <FooterBlock />
        </div>
    )
}

