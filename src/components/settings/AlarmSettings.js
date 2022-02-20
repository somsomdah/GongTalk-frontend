import { useState } from "react";
import styled from "styled-components/native";
import { color } from "../../common/colors";
import { SemiHeadline2, SemiHeadline4 } from "../_common/Typography";
import { Switch } from "react-native";


const Container = styled.View`
    padding: 20px 24px 28px 20px;
    border-bottom-color: ${color.gray3};
    border-bottom-width: 0.5px;
    flex-direction: column;
    align-items: stretch;
`;

const TitleBox = styled.View`
    padding-bottom: 16px;
    flex-direction: row;
    justify-content: flex-start;
`

const ItemBox = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0px;
    justify-content: space-between;
`;

const ToggleButton = ({disabled, onValueChange, on}) => {

    return (
        <Switch 
            trackColor={{false: color.gray3, true: disabled? color.primaryLight : color.primary}}
            thumbColor={disabled ? color.gray1 : color.white}
            onValueChange={onValueChange}
            value={on}
            disabled={disabled}
            style={{marginVertical: -12}}
        />
    );
}


const Item = ({value, toggleDisabled, toggleOn, onToggleValueChange}) => {

    return (
        <ItemBox>
            <SemiHeadline2 style={{color: toggleDisabled ? color.gray3 : color.black}}>{value}</SemiHeadline2>
            <ToggleButton disabled={toggleDisabled} on={toggleOn} onValueChange={onToggleValueChange}/>
        </ItemBox>
    );
}


const AlarmSettings = () => {

    const [alarm, setAlarm] = useState(true);
    const [sound, setSound] = useState(true);
    const [vibration, setVibration] = useState(true);
    const [soundDisabled, setSoundDisabled] = useState(false);
    const [vibDisabled, setVibDisabled] = useState(false);


    const toggleAlarm =  () => {
        setAlarm(!alarm);
        setSoundDisabled(!soundDisabled);
        setVibDisabled(!vibDisabled)
    } 

    const toggleSound =  () => {
        setSound(!sound);
    } 

    const toggleVib =  () => {
        setVibration(!vibration);
    } 
    

    return (
        <Container>
            <TitleBox>
                <SemiHeadline4>알림 설정</SemiHeadline4>
            </TitleBox>
            <Item value={'게시글 알림'} toggleDisabled={false} toggleOn={alarm} onToggleValueChange={toggleAlarm}/>
            <Item value={'소리'} toggleDisabled={soundDisabled} toggleOn={sound} onToggleValueChange={toggleSound}/>
            <Item value={'진동'} toggleDisabled={vibDisabled} toggleOn={vibration} onToggleValueChange={toggleVib}/>
        </Container>
    );
}

export default AlarmSettings;