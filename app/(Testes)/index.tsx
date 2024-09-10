
import theme from "@/theme"; 
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { ScrollView, Text } from "react-native";
import { Icon } from "react-native-elements";

;


export default function Teste(){
    return (
        <ScrollView>
        <ThemeProvider theme={theme}>
            <Container>
                <Section>
                    <Main>
                        <Title>Bem-Vindo ao teste de Modelos Atômicos!</Title>
                        <Conteudo>Neste teste, você será desafiado a aplicar seus conhecimentos sobre os principais modelos atômicos desenvolvidos ao longo da história da ciência. Desde as primeiras teorias propostas por filósofos até os avanços modernos da física quântica, os modelos atômicos nos ajudaram a entender melhor a estrutura e o comportamento da matéria. Agora é sua chance de revisar esses conceitos fundamentais e testar suas habilidades. Boa sorte!</Conteudo  >
                    </Main>

                    <Cards>
                    <Info>
                        <Icon style={{ paddingLeft: 10}}
                        name="check"
                        type="material"
                        color='#04e762'
                        size={40}
                        />
                        <Text style={{color: '#fff', fontWeight: 'bold', width: 290}}>Escolha um local tranquilo para realizar o teste.</Text>
                    </Info>

                    <Info>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="check"
                        type="material"
                        color='#04e762'
                        size={40}
                        />
                        <Text style={{color: '#fff', fontWeight: 'bold', width: 290}}>Não utilize materiais de consulta.</Text>
                    </Info>

                    <Info>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="check"
                        type="material"
                        color='#04e762'
                        size={40}
                        />
                        <Text style={{color: '#fff', fontWeight: 'bold', width: 290}}>Responda de acordo com seus conhecimentos.</Text>
                    </Info>

                    <Info>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="check"
                        type="material"
                        color='#04e762'
                        size={40}
                        />
                        <Text style={{color: '#fff', fontWeight: 'bold', width: 290}}>O teste devolverá seu resultado.</Text>
                    </Info>
                    </Cards>
                </Section>

                <Icon style={{marginTop: 20}}
                        name="south"
                        type="material"
                        color='#1d64d0'
                        size={80}
                        />

                <Questoes>
                    <Text>dvsvrebabdfb</Text>
                </Questoes>
            </Container>
        </ThemeProvider>
        </ScrollView>
  
    );
}


const Container = styled.View` 
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Section = styled.View`
    flex-direction: row;
    height: 430px;  
    justify-content: center;
    align-items: center;
    gap: 200px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}; 
    color: ${({ theme }) => theme.COLORS.BLUE_300}; 
    font-weight: bolder;
    width: 350px;
`
const Conteudo = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}; ;
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
    font-weight: bolder;
    width: 430px;
`

const Main = styled.View`
    gap: 10px
`

const Cards = styled.View`
    gap: 20px;
`

const Info = styled.View`
    height: 55px;
    width: 300px;
    border-radius: 15px;
    gap: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300}; 
`



const Questoes = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

