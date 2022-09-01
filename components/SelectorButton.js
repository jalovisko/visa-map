import { useEffect, useState, memo, useMemo, useContext } from 'react';
import { ColorContext } from '../components/context/ColorContext';
import styles from '../styles/Selector.module.css'
import Button from '@mui/material/Button';
import SelectorSVG from './SelectorSVG';
import Passport from './Passport';

import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';
import anguillaPassport from '../public/anguilla.jpg'

const SelectorButton = ({ selectArray, setOpenDrawer, setSelect, num, select }) => {

    const { color, setColor } = useContext(ColorContext)

    const i = () => {
        switch(selectArray[num].passport) {
            case "afghanistan": return afghanistanPassport
                break;
            case "albania": return albaniaPassport
                break;
            case "algeria": return algeriaPassport
                break;
            case "andorra": return andorraPassport
                break;
            case "angola": return angolaPassport
                break;
            case "anguilla": return anguillaPassport
                break;
        }
    }

  return (
    <Button onClick={() => {
        setOpenDrawer(true);
        setSelect({ selection: num });
    }}>
    {(selectArray[num].passport == undefined) ? <SelectorSVG /> : <Passport image={i()}/>}
    </Button>
  )
}

export default SelectorButton