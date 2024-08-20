import styled, { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import { View, Image, Text, TextInput, Pressable } from "react-native";4
import { Input } from "react-native-elements/dist/input/Input";


export default function Login(){

    return(
        
        <ThemeProvider theme={theme}>
        <Container>
                <Section>
                    <Info>
                    <Image style={{height: 400, width: 400}} source={require('../../assets/images/Logo2.png')}/>
                    </Info>

                    <Caixa>
                  
                    <View style={{gap: 30}}>
                       <Title> Login </Title>
                       <Subtitle>Bem-vindo ao QuímicaInBox</Subtitle>
                    </View>

                    <View style={{gap: 20}}>
                       <Input placeholder="Email"/>
                       <Input placeholder="Senha"/>
                    </View>

                    <View style={{gap: 30}}>
                       <Button>
                         <Text>Entrar</Text>
                       </Button>
                    </View>
                 
                    </Caixa>
                </Section>
        </Container>   
        </ThemeProvider> 
        )
}

const Container = styled.View`
    height: 100rem;
    background-color: ${({theme}) => theme.COLORS.BLUE_100};
    `

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 2rem;
    text-align: center;

    `

const Subtitle = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

const Section = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 9rem;
    `

const Info = styled.View`
    height: 28rem;
    width: 30rem;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    `

const Caixa = styled.View`
    height: 28rem;
    width: 25rem;
    align-items: center;
    gap: 4rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    `

// const Input = styled.TextInput`
//     height: 2.5rem;
//     width: 15rem;
//     border-radius: 0.3rem;
//     padding-left: 1rem;
//     background-color: ${({theme}) => theme.COLORS.BLUE_100};
//     `

const Button = styled.Pressable`
    height: 2rem;
    width: 8rem;
    border-radius: 0.5rem;
    border: 2px solid #000000;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    `