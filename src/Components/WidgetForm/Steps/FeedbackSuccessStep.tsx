import { CloseButton } from "../../CloseButton";
import successImageUrl from "../../../Assets/success.svg"

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequest:() => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequest} : FeedbackSuccessStepProps) {
    const successImage=successImageUrl
    return(
    <>
      <header>
            <CloseButton/>
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={successImage} alt="" />
            <span className="text-xl mt-2">Agradecemos o feedback!</span>
            <button
                onClick={onFeedbackRestartRequest}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teal-600"
                type="button"
            >
                Quero enviar outro
            </button>
        </div>
    </>
    )
}