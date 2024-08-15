
import theme from "@/theme";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";

export default function Header(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Image source={require('../../assets/images/LOGO.png')}/>
            <TouchableOpacity>
            <Text> Home </Text>
        </TouchableOpacity>
        </Container>   
       
        </ThemeProvider> )
}

const Container = styled.View`
    width: 100%;
    height: 30%;
    flex-direction: row;    
  
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};
`