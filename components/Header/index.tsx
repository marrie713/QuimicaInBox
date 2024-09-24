
import theme from "@/theme";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';

export type Informacoes = {
    numero: number,
    icones: string,
    texto: string
} 
export type Testes =   {
    id: string,
    imagem: string,
    titulo: string,
    texto: string,
    materia: number
}

export default function Header(){
    const testesAtomistica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    }]

    const informacoesAtomistica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        }
    ]

    const testesQuimicaGeral: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    }]

    const informacoesQuimicaGeral: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        }
    ]

    const testesInorganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    }]

    const informacoesInorganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        }
    ]

    const testesFisicoQuimica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    }]

    const informacoesFisicoQuimica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        }
    ]

    const testesOrganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 1
    }]

    const informacoesOrganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        }
    ]

    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Image style={{height: 70, width: 210}} source={require('../../assets/images/Logo.png')}/>

            <View style={{flexDirection: 'row', gap: 10 }}> 

            <Link href='/(Inicial)' asChild>
                <TouchableOpacity>
                <Title> Home </Title>   
                </TouchableOpacity> 
            </Link>

            <Link href={{
                pathname: '/(ZAtomistica)',
                params: {
                    sobre: 'Atomistica',
                    informacoes: JSON.stringify(informacoesAtomistica),
                    testes: JSON.stringify(testesAtomistica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Atomística </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Química Geral',
                     informacoes: JSON.stringify(informacoesQuimicaGeral),
                     testes: JSON.stringify(testesQuimicaGeral)
                }}} asChild>
                <TouchableOpacity>
                <Title> Química Geral </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Inorgânica',
                     informacoes: JSON.stringify(informacoesInorganica),
                     testes: JSON.stringify(testesInorganica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Inorgânica </Title>
                </TouchableOpacity>
            </Link>
          
            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Físico Química',
                     informacoes: JSON.stringify(informacoesFisicoQuimica),
                     testes: JSON.stringify(testesFisicoQuimica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Físico Química </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Organica',
                     informacoes: JSON.stringify(informacoesOrganica),
                     testes: JSON.stringify(testesOrganica)
                }}} asChild>
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