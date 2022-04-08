import React, {useEffect, useState} from 'react';
import './AnimalView.css';

import {ReactComponent as SquidSvg} from '../../assets/svg/squid.svg';
import {ReactComponent as JellyfishSvg} from '../../assets/svg/jellyfish.svg';
import {ReactComponent as PufferSvg} from '../../assets/svg/puffer.svg';
import {ReactComponent as TortoiseSvg} from '../../assets/svg/tortoise.svg';
import {ReactComponent as SeahorseSvg} from '../../assets/svg/seahorse.svg';
// hacer todas las views en un mismo archivo... un hook para las animaciones: easier
// para hacer el efecto de que la foto anterior se va, hay
// hay que implementar redux: dependiendo de las props.animation, el render será diferente (cambiará el id de la animación)

const AnimalView = () => {

    const [animal, setAnimal] = useState(false);

    // setAnimal = props;

    const displayAnimal = (desiredAnimal) => {

        switch (desiredAnimal){
            case 1:
               setAnimal("jellyfish");
               break
            case 2:
             setAnimal("puffer");
             break
            case 3:
                setAnimal("seahorse");
                break
            case 4:
                setAnimal("squid");
                break
            case 5:
                setAnimal("tortoise");
                break

            }
            
    }



    switch (animal) {
        case "jellyfish":
            return  (
                    <div className="jellyfish_box" id="animationSlash">
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
                <div className="puffer_box" id="animationSlash">
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
                <div className="seahorse_box" id="animationSlash">
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
                <div className="squid_box" id="animationSlash">
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
                <div className="tortoise_box" id="animationSlash">
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
                <div className="sea_box" id="animationSlash">
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