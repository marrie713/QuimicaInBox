
import theme from "@/theme"; 
import { Image, Text } from "react-native";
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export default function Home() {

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
                <Banner source={require('../../assets/images/Banner.png')} />

                
            </Container>   
        </ThemeProvider>
    );
}


const Container = styled.View`
    height: 100rem;  
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Banner = styled.Image`
    height: 22rem; 
    width: 98rem;

    
`