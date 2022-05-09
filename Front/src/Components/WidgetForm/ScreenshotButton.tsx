import { Camera, Trash, TrashSimple } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot:string | null;
    onScreenshotTaken: (screenshot:string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTaken }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setiIsTakingScreenshot] = useState(false);

    async function takeScreenshot () {
        setiIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector("html")!);
        const base64image = canvas.toDataURL("image/png");
        onScreenshotTaken(base64image);
        setiIsTakingScreenshot(false);
    }

    if (screenshot){
        return( 
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => onScreenshotTaken(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: `right bottom`,
                backgroundSize: 180
            }}
            >
                <Trash weight="fill"/>
            </button>
        )
    }

   return ( 
    <button
    onClick={takeScreenshot}
    type="button"
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teal-600"
    >
        { isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6 text-zinc-100"/> }
    </button>
   )
}