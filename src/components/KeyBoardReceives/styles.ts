import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 40px;
`;

export const Key = styled(TouchableOpacity)`
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({theme}) => theme.COLORS.ZINC_400};
    border-radius: 50% ;
`


export const KeyConfirm = styled(TouchableOpacity)`
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.EMERALD_400};
    border-radius: 50% ;
`

export const KeyText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.ZINC_400};
`
