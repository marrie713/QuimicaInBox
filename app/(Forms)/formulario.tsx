
import theme from "@/theme";
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native";
import { useEffect, useState, useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView, FlatList } from "react-native";
import { apiConfig } from "@/Utils/axios";
import { Testes } from "@/components/Header"


type Questoes = {
    id: string,
    enunciado: string,
    imagem: string,
    alternativa_a: string,
    alternativa_b: string,
    alternativa_c: string,
    alternativa_d: string,
    alternativa_e: string,
    correta: string,
    nivel: string
}

export default function Form() {

    const [questoes, setQuestoes] = useState<Questoes[]>([])

    const testezin = ( testes : Testes ) => {

    useEffect(() => {
        apiConfig.get(`/teste/${testes.materia}}`).then((res) =>{
            setQuestoes(res.data);
        })
    })
}
    
    return (

        <ThemeProvider theme={theme}>
            <Container showsVerticalScrollIndicator={false}>
                <Section>
                    <Separar>
                        <Title>Bem-Vindo ao teste de Modelos Atômicos!</Title>
                        <Conteudo>Neste teste, você será desafiado a aplicar seus conhecimentos sobre os principais modelos atômicos desenvolvidos ao longo da história da ciência. Desde as primeiras teorias propostas por filósofos até os avanços modernos da física quântica, os modelos atômicos nos ajudaram a entender melhor a estrutura e o comportamento da matéria. Agora é sua chance de revisar esses conceitos fundamentais e testar suas habilidades. Boa sorte!</Conteudo  >
                    </Separar>

                    <Cards>
                        <Info>
                            <Icon style={{ paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Escolha um local tranquilo para realizar o teste.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Não utilize materiais de consulta.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>Responda de acordo com seus conhecimentos.</Text>
                        </Info>

                        <Info>
                            <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                name="check"
                                type="material"
                                color='#04e762'
                                size={40}
                            />
                            <Text style={{ color: '#fff', fontWeight: 'bold', width: 290 }}>O teste devolverá seu resultado.</Text>
                        </Info>
                    </Cards>
                </Section>

                <Icon style={{ marginTop: 20 }}
                    name="south"
                    type="material"
                    color='#1d64d0'
                    size={80}
                />
                
                <Questoes>
                    <Titulo>
                        <Primeiro>
                            <Texto>Modelo Atômico</Texto>
                        </Primeiro>
                        <Segundo>
                        </Segundo>
                    </Titulo>
                    <Main>
                        <SafeAreaView style={{ alignItems: 'center' }}>
                    <FlatList style={{ marginBottom: 50 }}
                        data={questoes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return(
                                <View>
                                    <Text style={{ width: 600 }}>{item.enunciado}</Text>
                                    <Text>{item.alternativa_a}</Text>
                                    <Text>{item.alternativa_b}</Text>
                                    <Text>{item.alternativa_c}</Text>
                                    <Text>{item.alternativa_d}</Text>
                                    <Text>{item.alternativa_e}</Text>
                                </View>
                     
                            )
                        }}
                        

                    />
                </SafeAreaView>

                    </Main>
                </Questoes>
            </Container>
        </ThemeProvider>

    );
} 


const Container = styled.ScrollView` 
    height: 100%;
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
    font-size: 38; 
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

const Separar = styled.View`
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
    margin-top: 130px;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.View`
    width: 1000px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
`

const Primeiro = styled.View`
    height: 35px;
    width: 170px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_100}; 
`

const Segundo = styled.View`
    height: 35px;
    width: 100px;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
`
const Texto = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}; 

`

const Main = styled.View`   
    width: 1000px;
    height: 500px;
    margin-bottom: 25px;
    align-items: center; 
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Alternativas = styled.View`
    gap: 10px;
    margin-top: 25px;
    margin-right: 540px;
    flex-direction: column;
    
`

const A = styled.Pressable`   
    flex-direction: row;
    gap: 10px;
    align-items: center;
  
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
`

const Botao = styled.TouchableOpacity`   
    border-width: 2px;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_300}; ;

`

const Pergunta = styled.Text`
    width: 800px;
    text-align: start;
    margin-top: 30px;
`

const Proxima = styled.Pressable`   
    height: 28px;
    width: 110px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
`


