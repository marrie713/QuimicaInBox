import styled, { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import { View, Image, Text, TextInput, Pressable } from "react-native";

import { Input, Icon } from "react-native-elements";
import { useState } from "react";



export default function Login(){
 
 const [passwordVisible, SetPasswordVisible] = useState(true)

 const [email, SetEmail] = useState('someemail@')
 const [password, SetPassword] = useState('1234567890')


 
    return(
        
        <ThemeProvider theme={theme}>
        <Container>
                <Section>
                    <Info>
                    <Image style={{height: 100, width: 300}} source={require('../../assets/images/Logo.png')}/>
                    </Info>

                    <Caixa>
                  
                    <View style={{gap: 30}}>
                       <Title> Login </Title>
                       <Subtitle>Bem-vindo ao Química In Box</Subtitle>
                    </View>

                    <View style={{gap: 20}}>
                       <Input placeholder="Email"/>
                       <Input placeholder="Senha"
                       
                          secureTextEntry={passwordVisible}
                          onChangeText={text => SetPassword(text)}
                                  rightIcon={
                                      passwordVisible ? 
                                      
                                      <Icon 
                                          name="visibility-off"
                                          type="material"
                                          size={22}
                                          onPress={()=> SetPasswordVisible(!passwordVisible)}
                                      />
                                      :
                                      <Icon 
                                          name="visibility"
                                          type="material"
                                          size={22}
                                          onPress={()=> SetPasswordVisible(!passwordVisible)}
                                      />
                                  }   
                          />
                    </View>

                    <View style={{gap: 30}}>
                       <Button>
                         <Text style={{color: '#fff'}}>Entrar</Text>
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
    background-color: ${({theme}) => theme.COLORS.WHITE_BLUE};
   
    `

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
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
    margin-top: 5rem;
    `

const Info = styled.View`
    height: 35rem;
    width: 30rem;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};   
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    `

const Caixa = styled.View`
    height: 35rem;
    width: 25rem;
    align-items: center;
    gap: 4rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-top-right-radius: 2rem;
   
    border-bottom-right-radius: 2rem;
    `
    
const Button = styled.Pressable`
    height: 2.5rem;
    width: 10rem;
    border-radius: 0.7rem;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    
    
    `