//React
import { useState } from "react";
//Components
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
//Images
import caterpillarImageUrl from '../../Assets/caterpillar.svg'
import lampImageUrl from '../../Assets/lamp.svg'
import bubbleImageUrl from '../../Assets/bubble.svg'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

/***********************************************************************************************************************/
//Types & Objects
/***********************************************************************************************************************/

export const feedbackTypes={
    BUG:{
        title: "Problema",
        image: {
            source: caterpillarImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: "Ideia",
        image: {
            source: lampImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: "Outro",
        image: {
            source: bubbleImageUrl,
            alt: 'Imagem de um balão de fala'
        }
    }

}

export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {
    const[feedbackTypeState, setFeedbackType] = useState<FeedbackType | null> (null) //Uses FeedbackType as a state variable
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="text-white bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
          

           { feedbackSent ? (
               <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
           ) : (
               <>
                {!feedbackTypeState ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/> //Sends the setFeedbackType function to the FeedbackTypeStep component
            ) : (
                <FeedbackContentStep
                feedbackTypeState={feedbackTypeState}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent = {() => setFeedbackSent(true)}
                />
            )} </>
           )}
           
            <footer className="text-xs text-neutral-400">
                Baseado na NLW da <a className="underline underline-offset-2 hover:text-neutral-100 transition-colors" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    );
}