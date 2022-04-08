import React, {useEffect, useState} from 'react';
import './AnimalView.css';

// hacer todas las views en un mismo archivo... un hook para las animaciones: easier
// para hacer el efecto de que la foto anterior se va, hay
// hay que implementar redux: dependiendo de las props.animation, el render será diferente (cambiará el id de la animación)

const AnimalView = () => {

    const [animal, setAnimal] = useState(false);

    // setAnimal = props;



    switch (animal) {
        case "jellyfish":
            return  (
                    <div className="jellyfish_box" id="animationSlash">
                    
                    </div>);
                    break
        case "puffer":
            return  (
                    <div className="puffer_box" id="animationSlash">
                    
                    </div>);
                    break      
        case "seahorse":
            return  (
                    <div className="seahorse_box" id="animationSlash">
                    
                    </div>);
                    break                 
        case "squid":
            return  (
                    <div className="squid_box" id="animationSlash">
                    
                    </div>);
                    break
        case "tortoise":
            return  (
                    <div className="tortoise_box" id="animationSlash">
                    
                    </div>);
                    break
        default:
            return (
                <div className="sea_box" id="animationSlash">
                
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