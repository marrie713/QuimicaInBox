import Header from "@/components/Header";
import theme from "@/theme";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";

export default function Home(){
    return(
        <ThemeProvider theme={theme}>

        <Container>
            
        </Container>   
        </ThemeProvider> 

)}

const Container = styled.View`
    height: 100rem;
    background-color: ${({theme}) => theme.COLORS.BLUE_100};
    `