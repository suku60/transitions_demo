import React, {useEffect, useState} from 'react';
import './AnimalView.css';

import {ReactComponent as SquidSvg} from '../../assets/svg/squid.svg';
import {ReactComponent as JellyfishSvg} from '../../assets/svg/jellyfish.svg';
import {ReactComponent as PufferSvg} from '../../assets/svg/puffer.svg';
import {ReactComponent as TortoiseSvg} from '../../assets/svg/tortoise.svg';
import {ReactComponent as SeahorseSvg} from '../../assets/svg/seahorse.svg';

const AnimalView = () => {

    // animal hook: is set by the first switch, gets the information from the click on the item displayed on the screen.
    // after that, depending on the value it is having, sets the new screen on the second switch (render).
    const [animal, setAnimal] = useState("");

    const [animation, setAnimation] = useState("");
    const [animationDisplayed, setAnimationDisplayed] = useState(animation)


    const displayAnimal = (desiredAnimal) => {

        // adding an if to evade bugs 
        if (animationDisplayed === ""){

        switch (desiredAnimal){
            case 1:
                setAnimal("jellyfish");
                setAnimationDisplayed(animation)
                setTimeout(() => {
                    setAnimationDisplayed("")
                }, 1000);
                break
            case 2:
                setAnimal("puffer");
                setAnimationDisplayed(animation)
                setTimeout(() => {
                    setAnimationDisplayed("")
                }, 1000);
                break
            case 3:
                setAnimal("seahorse");
                setAnimationDisplayed(animation)
                setTimeout(() => {
                    setAnimationDisplayed("")
                }, 1000);
                break
            case 4:
                setAnimal("squid");
                setAnimationDisplayed(animation)
                setTimeout(() => {
                    setAnimationDisplayed("")
                }, 1000);
                break
            case 5:
                setAnimal("tortoise");
                setAnimationDisplayed(animation)
                setTimeout(() => {
                    setAnimationDisplayed("")
                }, 1000);
                break

            }

        }else{
            
        }
            
    }

    const selectAnimation = (desiredAnimation) =>{
        setAnimation(desiredAnimation)
    }



    switch (animal) {
        case "jellyfish":
            return  (
                    <div className="jellyfish_box" id={animationDisplayed}>
                        <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                        <div className="sidebar_inside_home">
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                        </div>
                    </div>);
                    break
        case "puffer":
            return  (
                <div className="puffer_box" id={animationDisplayed}>
                   <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break      
        case "seahorse":
            return  (
                <div className="seahorse_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break                 
        case "squid":
            return  (
                <div className="squid_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break
        case "tortoise":
            return  (
                <div className="tortoise_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break
        default:
            return  (
                <div className="sea_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
    }

//     if(animal === "jellyfish") {

//         return (
//             <div className="jellyfish_box" id="animationSlash">
        
//     </div>)
// } else if(animal === "jellyfish") {

//     return (
//         <div className="jellyfish_box" id="animationSlash">
    
//         </div>)
// } else if(animal === "jellyfish") {

//     return (
//         <div className="jellyfish_box" id="animationSlash">
    
// </div>)
// } else   
}

export default AnimalView;