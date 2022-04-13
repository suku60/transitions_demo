import React, {useEffect, useState} from 'react';
import './AnimalView.css';

import {ReactComponent as SquidSvg} from '../../assets/svg/squid.svg';
import {ReactComponent as JellyfishSvg} from '../../assets/svg/jellyfish.svg';
import {ReactComponent as PufferSvg} from '../../assets/svg/puffer.svg';
import {ReactComponent as TortoiseSvg} from '../../assets/svg/tortoise.svg';
import {ReactComponent as SeahorseSvg} from '../../assets/svg/seahorse.svg';

// generar idea de rafa / use svg as background and a fixed deep sea background


const AnimalView = () => {

    // animal hook: is set by the first switch, gets the information from the click on the item displayed on the screen.
    // after that, depending on the value it is having, sets the new screen on the second switch (render).
    const [animal, setAnimal] = useState("");

    const [animation, setAnimation] = useState("");
    const [animationEnding, setAnimationEnding] = useState("");
    const [animationDisplayed, setAnimationDisplayed] = useState(animation)

    const [selectedAnimation, setSelectedAnimation] = useState("")

console.log("animal before function", animal)
    const displayAnimal = (desiredAnimal) => {

        console.log("desired animal is... ", desiredAnimal)
        console.log("animal we leave is...", animal)

        // adding an if to evade bugs 
        if (animationDisplayed === ""){

        switch (desiredAnimal){
            case 1:
                // setAnimationEnding(animation+"End")
                setAnimationDisplayed(animationEnding)
                setTimeout(() => {
                    setAnimal("jellyfish");
                    setAnimationDisplayed(animation)
                    setTimeout(() => {
                        setAnimationDisplayed("")
                    }, 500);
                }, 500);

                break
            case 2:
                setAnimationDisplayed(animationEnding)
                setTimeout(() => {
                    setAnimal("puffer");
                    setAnimationDisplayed(animation)
                    setTimeout(() => {
                        setAnimationDisplayed("")
                    }, 500);
                }, 500);
                break
            case 3:
                setAnimationDisplayed(animationEnding)
                setTimeout(() => {
                    setAnimal("seahorse");
                    setAnimationDisplayed(animation)
                    setTimeout(() => {
                        setAnimationDisplayed("")
                    }, 500);
                }, 500);
                break
            case 4:
                setAnimationDisplayed(animationEnding)
                setTimeout(() => {
                    setAnimal("squid");
                    setAnimationDisplayed(animation)
                    setTimeout(() => {
                        setAnimationDisplayed("")
                    }, 500);
                }, 500);
                break
            case 5:
                setAnimationDisplayed(animationEnding)
                setTimeout(() => {
                    setAnimal("tortoise");
                    setAnimationDisplayed(animation)
                    setTimeout(() => {
                        setAnimationDisplayed("")
                    }, 500);
                }, 500);
                break

            }

            console.log("desired animal is..", animal)
        }else{

        }
            
    }

    const selectAnimation = (desiredAnimation) =>{
        setAnimation(desiredAnimation)
        setAnimationEnding(desiredAnimation+"End")
    }



    switch (animal) {
        case "jellyfish":
            return  (
                    <div className="jellyfish_box" id={animationDisplayed}>
                        <div className="sidebar_inside_home animations_sidebar">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                        </div>
                        <div className="sidebar_inside_home">
                            <div className="sidebar_item_box selected" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                            <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                        </div>
                    </div>
                    )
                    break
        case "puffer":
            return  (
                <div className="puffer_box" id={animationDisplayed}>
                   <div className="sidebar_inside_home animations_sidebar">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box selected" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break      
        case "seahorse":
            return  (
                <div className="seahorse_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home animations_sidebar">
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationSlash")}>animation#1</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationOpacity")}>animation#2</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform")}>animation#3</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationTransform2")}>animation#4</div>
                            <div className="sidebar_item_box item_text" onClick={()=>selectAnimation("animationMix")}>animation#5</div>
                        </div>
                    <div className="sidebar_inside_home">
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(1)}><JellyfishSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(2)}><PufferSvg/></div>
                        <div className="sidebar_item_box selected" onClick={()=>displayAnimal(3)}><SeahorseSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break                 
        case "squid":
            return  (
                <div className="squid_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home animations_sidebar">
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
                        <div className="sidebar_item_box selected" onClick={()=>displayAnimal(4)}><SquidSvg/></div>
                        <div className="sidebar_item_box" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break
        case "tortoise":
            return  (
                <div className="tortoise_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home animations_sidebar">
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
                        <div className="sidebar_item_box selected" onClick={()=>displayAnimal(5)}><TortoiseSvg/></div>
                    </div>
                </div>);
                break
        default:
            return  (
                <div className="sea_box" id={animationDisplayed}>
                    <div className="sidebar_inside_home animations_sidebar">
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
}

export default AnimalView;