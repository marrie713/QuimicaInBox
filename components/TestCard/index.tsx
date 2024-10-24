import { apiConfig } from "@/Utils/axios"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { Text } from "react-native-elements"
import styled from "styled-components/native"

type Props = {
    imagem: string,
    titulo: string,
    texto: string,
    materia: string
}

export type Propse = {
    titulo: string,
    texto: string,
    materia: string
}

export default function TestCard({imagem, titulo, texto, materia}: Props){

    const informacoesAtomistica: Propse[] = 
    [
        {
            titulo: 'Bem-Vindo ao teste de Modelos Atômicos!',
            texto: 'Neste teste, você será desafiado a aplicar seus conhecimentos sobre os principais modelos atômicos desenvolvidos ao longo da história da ciência. Desde as primeiras teorias propostas por filósofos até os avanços modernos da física quântica, os modelos atômicos nos ajudaram a entender melhor a estrutura e o comportamento da matéria. Agora é sua chance de revisar esses conceitos fundamentais e testar suas habilidades. Boa sorte!',
            materia: 'Modelo Atômico'
        },
        {
            titulo: 'Bem-Vindo ao teste de Estrutura Atômica!',
            texto: '',
            materia: 'Estrutura Atômica'
        },
        {
            titulo: '',
            texto: '',
            materia: 'Configuração eletrônica'
        },
        {
            titulo: '',
            texto: '',
            materia: 'Radioatividade'
        },
       
    ]
    
    const [questoes, setQuestoes] = useState([]);

    return(<Container>
            <Imagem source={{uri: imagem}}/>
            <Titulo>{titulo}</Titulo>
            <Conteudo>{texto}</Conteudo>
            <Link href={{
                    pathname: "/(Forms)/formulario",
                    params: {
                        informacoes: JSON.stringify(informacoesAtomistica),
                   }}} asChild>
            <Botao>
                <Text style={{color:'#fff', fontSize: 16, fontWeight: "bold"}}>Acessar</Text>
            </Botao>
            </Link>
    </Container>
    )
}

const Container= styled.View`
    height: 350px;
    width: 300px; 
    align-items: center;
    margin-top: 80px;
    margin-left: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const Titulo = styled.Text`
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
 
`

const Conteudo = styled.Text`
    text-align: center;
    font-size: 16px;
 
`

const Imagem = styled.Image`
    height: 100px;
    width: 100px;
    margin-top: 20px;
`

const Botao = styled.TouchableOpacity`
    height: 40px;
    width: 110px; 
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`