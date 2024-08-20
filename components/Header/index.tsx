
import theme from "@/theme";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import BasicExample from "../Dropdawn";

export default function Header(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
                <Image style={{height: 170, width: 170}} source={require('../../assets/images/Logo2.png')}/>

            <View style={{flexDirection: 'row', gap: 10  }}>
                <TouchableOpacity>
                <Title> Home </Title>
                </TouchableOpacity>

                <TouchableOpacity>
                <Title> Química Geral </Title>
                </TouchableOpacity>

                <TouchableOpacity>
                <Title> Físico Química </Title>
                </TouchableOpacity>

                <TouchableOpacity>
                <Title> Inorgânica </Title>
                </TouchableOpacity>

                <TouchableOpacity>
                <Title> Orgânica </Title>
                </TouchableOpacity>
            </View>

        </Container>   
       
        </ThemeProvider> )
}

const Container = styled.View`
    height: 10rem;
    flex-direction: row;    
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};
`

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.WHITE};
`