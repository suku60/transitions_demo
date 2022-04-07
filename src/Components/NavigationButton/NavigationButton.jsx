import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NavigationButton.css';

const NavigationButton = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {

        desiredView(props.pathUrl)

    }

    return (
        <div className="nav_button_box" onClick={()=>pathFinder()}>
                <div className="location_item">
                    {props.buttonIcon}
                    </div>
        </div>
    )
};

export default NavigationButton;