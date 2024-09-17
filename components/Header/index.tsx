
import theme from "@/theme";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';

export default function Header(){
    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Image style={{height: 70, width: 210}} source={require('../../assets/images/Logo.png')}/>

            <View style={{flexDirection: 'row', gap: 10 }}> 

            <Link href='/' asChild>
                <TouchableOpacity >
                <Title> Home </Title>   
                </TouchableOpacity> 
            </Link> 

            <Link href='/(ZAtomistica)'>
                <TouchableOpacity>
                <Title> Atomística </Title>
                </TouchableOpacity>
            </Link>

            <Link href='/' asChild>
                <TouchableOpacity>
                <Title> Química Geral </Title>
                </TouchableOpacity>
            </Link>

            <Link href='/' asChild>
                <TouchableOpacity>
                <Title> Inorgânica </Title>
                </TouchableOpacity>
            </Link>
          
            <Link href='/' asChild>
                <TouchableOpacity>
                <Title> Físico Química </Title>
                </TouchableOpacity>
            </Link>

            <Link href='/' asChild>
                <TouchableOpacity>
                <Title> Orgânica </Title>
                </TouchableOpacity>
            </Link>

            </View> 
            <Link href='/(login)'>
            
            {/*Icon de Conta */}
             <Icon
                name='person'
                type='material'
                color='#fff'
                size={30}
            />
                 
            </Link> 

        </Container>   
       
        </ThemeProvider> )
}

const Container = styled.View`
    height: 8rem;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};
`

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`