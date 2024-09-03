
import theme from "@/theme"; 
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { Text, View } from "react-native";


export default function Home(){

    const [fontsLoaded, fontError] = useFonts({
        Inter_500Medium,
        Inter_700Bold,
      });

      useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    
    return (
      
        <ThemeProvider theme={theme}>
            <Container>
                <Title>
                    <Text style={{color: '#fff', fontSize: 22, paddingEnd: 10, textAlign: "right", alignItems: 'center', fontWeight: 600}}>Sobre Atomística</Text>
                </Title>
            <View style={{justifyContent: 'center', alignItems: 'center', height: 500}}>
                <Section>
                   <Card>
                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>

                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>

                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>
                   </Card>

                   <Card>
                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>

                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>

                        <Texto>
                            Inserir um pouquinho de textoInserir um pouquinho de textoInserir um pouquinho de texto
                        </Texto>
                   </Card>
                </Section>
            </View>

            </Container>   
        </ThemeProvider>
  
    );
}


const Container = styled.View`
    height: 100%;  
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Title = styled.View`
   height: 2.5rem;
   width: 25rem;
   margin-top: 3rem;
  
   border-top-right-radius: 1rem;
   border-bottom-right-radius: 1rem;
   justify-content: center;
   background-color: ${({ theme }) => theme.COLORS.BLUE_3OO}; 
`

const Texto = styled.View`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
`

const Section = styled.View`
    height: 80%;
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
`

const Card = styled.View`
    height: 95%;
    width: 47%;
    border-radius: 1rem;
    padding: 1.2rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`
