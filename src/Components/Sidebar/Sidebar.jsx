import React, {useEffect, useState} from 'react';
import './Sidebar.css';

import {ReactComponent as SquidSvg} from '../../assets/svg/squid.svg';
import {ReactComponent as JellyfishSvg} from '../../assets/svg/jellyfish.svg';
import {ReactComponent as PufferSvg} from '../../assets/svg/puffer.svg';
import {ReactComponent as TortoiseSvg} from '../../assets/svg/tortoise.svg';
import {ReactComponent as SeahorseSvg} from '../../assets/svg/seahorse.svg';

import NavigationButton from '../NavigationButton/NavigationButton';

const Sidebar = () => {

return (
<div className='sidebar_box'>
            {/* each item inside these boxes will be a svg that serves as an indicator for the photo */}
    <div className="sidebar_items_box">
        <div className="sidebar_home_box">home</div>
        <div className="sidebar_transitions_choices_box">transition</div>
        <div className="sidebar_locations_box">
        <NavigationButton pathUrl={"/squid"} buttonIcon={<SquidSvg/>} className="location_item"/>
        <NavigationButton pathUrl={"/jellyfish"} buttonIcon={<JellyfishSvg/>} className="location_item"/>
        <NavigationButton pathUrl={"/puffer"} buttonIcon={<PufferSvg/>} className="location_item"/>
        <NavigationButton pathUrl={"/tortoise"} buttonIcon={<TortoiseSvg/>} className="location_item"/>
        <NavigationButton pathUrl={"/seahorse"} buttonIcon={<SeahorseSvg/>} className="location_item"/>

            {/* <SquidSvg className="location_item" onClick={()=>pathFinder()} pathUrl={"/squid"}/> */}
            {/* <PufferSvg className="location_item" onClick={()=>pathFinder()}/>
            <SeahorseSvg className="location_item" onClick={()=>pathFinder()}/>
            <TortoiseSvg className="location_item" onClick={()=>pathFinder()}/>
            <JellyfishSvg className="location_item" onClick={()=>pathFinder()}/> */}
        </div>
        <div className="sidebar_about_box">about</div>
    </div>
</div>
)
}
export default Sidebar;