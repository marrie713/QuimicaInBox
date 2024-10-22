import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "@/theme"; 
import { Icon } from "react-native-elements";
import { Picker } from '@react-native-picker/picker'; // Importando o Picker correto
import { launchImageLibrary } from 'react-native-image-picker';

export default function Pagprof() {
    const [text, setText] = useState<string>('');
    const [selectedArea, setSelectedArea] = useState<string>('area1');
    const [selectedSubarea, setSelectedSubarea] = useState<string>('subarea1');
    const [selectedNivel, setSelectedNivel] = useState<string>('nivel1');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    

    const handleImagePicker = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                console.log(response); // Para depuração
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else if (response.assets && Array.isArray(response.assets) && response.assets.length > 0) {
                    const imageUri = response.assets[0].uri;
                    // Verifique se imageUri é uma string antes de definir o estado
                    if (typeof imageUri === 'string') {
                        setSelectedImage(imageUri);
                    } else {
                        console.log('Unexpected URI type:', imageUri);
                    }
                } else {
                    console.log('No image selected or unexpected response structure');
                }
            }
        );
    };
    
    const questoes = [
        { id: 1, texto: '(PUC-RS) A aceitação histórica da ideia de que a matéria é composta de átomos foi lenta e gradual. Na Grécia...' },
        { id: 2, texto: 'Qual cientista propôs o primeiro modelo atômico moderno que ficou conhecido como "bola de bilhar"...' },
        { id: 3, texto: '(UFF-MG) Associe as afirmações a seus respectivos responsáveis: I - O átomo não é indivisível e a matéria...' }
    ];

    return (
        <ScrollView>
            <ThemeProvider theme={theme}>
                <Container>
                    <Imgview>
                        <Image style={{ height: 780, width: '100%' }} source={require('../../assets/images/Testes.png')}/>
                        <Apresentacao>
                            <Title> Bem-vindo à página do Professor </Title>
                            <Subtitle>Compartilhe seus Conteúdos, Materiais Didáticos e Ferramentas Educativas</Subtitle>
                        </Apresentacao>
                    </Imgview>

                    <Section>
                        <Card>
                            <Content>Adicione questões</Content>
                            <Subtitle3>Insira novas perguntas para ampliar seu banco de questões...</Subtitle3>
                            <Botao>
                                <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                    name="playlist-add"
                                    type="material"
                                    color='#fff'
                                    size={30}
                                />
                            </Botao>
                        </Card>

                        <Card>
                            <Content>Edite questões</Content>
                            <Subtitle3>Atualize ou personalize suas questões...</Subtitle3>
                            <Botao>
                                <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                    name="edit"
                                    type="material"
                                    color='#fff'
                                    size={27}
                                />
                            </Botao>
                        </Card>

                        <Card>
                            <Content>Exclua questões</Content>
                            <Subtitle3>Remova questões desatualizadas ou irrelevantes...</Subtitle3>
                            <Botao>
                                <Icon style={{ alignItems: 'flex-start', paddingLeft: 10 }}
                                    name="delete-forever"
                                    type="material"
                                    color='#fff'
                                    size={32}
                                />
                            </Botao>
                        </Card>
                    </Section>

                    <Letter>
                        <Label>
                            <Icon style={{ justifyContent: 'center', alignItems: 'center' }}
                                name="playlist-add"
                                type="material"
                                color='#fff'
                                size={30}
                            />
                            Adicionar questões</Label>
                    </Letter>

                    {/* Área de Texto */}
                    <Add>
                        <ViewQuestions1>
                        <TextArea
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Descreva sua questão aqui..."
                            value={text}
                            onChangeText={setText}
                        />
                         
          {/* Áreas de Texto com Círculos */}
          {['a', 'b', 'c', 'd', 'e'].map((letter, index) => (
                            <TextAreaContainer key={index}>
                                <Circle>
                                    <CircleText>{letter.toUpperCase()}</CircleText>
                                </Circle>
                                <TextArea2
                                    multiline={true}
                                    numberOfLines={2}
                                    placeholder={`Descreva sua alternativa ${letter.toUpperCase()} aqui...`}
                                />
                            </TextAreaContainer>
                        ))}
                    

                    </ViewQuestions1>

                        <ViewQuestions>
                            {/* Seletor 1 */}
                            <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedArea}
                                onValueChange={(itemValue) => setSelectedArea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Área" value="area1" />
                                <Picker.Item label="Química Geral" value="area2" />
                                <Picker.Item label="Inorgânica" value="area3" />
                                <Picker.Item label="Físico-Química" value="area4" />
                                <Picker.Item label="Orgânica" value="area5" />
                            </StyledPicker>
                        </PickerContainer>

                        {/* Seletor de Subárea */}
                        <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedSubarea}
                                onValueChange={(itemValue) => setSelectedSubarea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Subárea" value="subarea1" />
                                <Picker.Item label="Reações Químicas" value="subarea2" />
                                <Picker.Item label="Estrutura Atômica" value="subarea3" />
                                <Picker.Item label="Ligação Química" value="subarea4" />
                                <Picker.Item label="Termodinâmica Química" value="subarea5" />
                            </StyledPicker>
                        </PickerContainer>

                        {/* Seletor de Nível da Questão */}
                        <PickerContainer>
                            <StyledPicker
                                selectedValue={selectedNivel}
                                onValueChange={(itemValue) => setSelectedNivel(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Nível" value="nivel1" />
                                <Picker.Item label="1" value="nivel2" />
                                <Picker.Item label="2" value="nivel3" />
                                <Picker.Item label="3" value="nivel4" />
                            </StyledPicker>
                        </PickerContainer>
                        

                            {/* seletor de imagem */}
                        <ImageUploadContainer>
            {selectedImage ? (
                <ImageContainer>
                    <SelectedImage source={{ uri: selectedImage }} resizeMode="contain" />
                </ImageContainer>
            ) : (
                <PlaceholderText>Selecione uma imagem</PlaceholderText>
            )}
            <Pressable onPress={handleImagePicker}>
                <UploadButton>
                    <Icon name="add-a-photo" type="material" color="white" />
                    <ButtonText>Adicionar Imagem</ButtonText>
                </UploadButton>
            </Pressable>
        </ImageUploadContainer>

                     </ViewQuestions> 

        <RoundButton>
            <Icon name="add" type="material" color="white" size={30} />
        </RoundButton>
                            
                    </Add>
                  
                    <Letter>
                        <Label>
                            <Icon style={{ justifyContent: 'center', alignItems: 'center' }}
                                name="playlist-add"
                                type="material"
                                color='#fff'
                                size={30}
                            />
                            Adicionar questões</Label>
                    </Letter> 
                   
                    <Add2>
                    {/* Seção de Área e Subárea */}
                    <View style={{ flexDirection: 'row',alignItems:'center', justifyContent:'center', marginBottom: 20, gap:700 }}>
                        <PickerContainer2>
                            <StyledPicker2
                                selectedValue={selectedArea}
                                onValueChange={(itemValue) => setSelectedArea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Área" value="area1" />
                                <Picker.Item label="Atomística" value="area2" />
                                <Picker.Item label="Química Orgânica" value="area3" />
                                <Picker.Item label="Química Inorgânica" value="area4" />
                                <Picker.Item label="Química Analítica" value="area5" />
                            </StyledPicker2>
                        </PickerContainer2>

                        <PickerContainer2>
                            <StyledPicker2
                                selectedValue={selectedSubarea}
                                onValueChange={(itemValue) => setSelectedSubarea(itemValue as string)} // Cast para string
                            >
                                <Picker.Item label="Subárea" value="subarea1" />
                                <Picker.Item label="Modelo Atômico" value="subarea2" />
                                <Picker.Item label="Estrutura Atômica" value="subarea3" />
                                <Picker.Item label="Ligação Química" value="subarea4" />
                            </StyledPicker2>
                        </PickerContainer2>
                    </View>

                    {/* Seção de Questões */}
                    {questoes.map((questao) => (
                        <QuestaoContainer key={questao.id}>
                            <TextoQuestao>Questão: {questao.texto}</TextoQuestao>
                            <Acoes>
                                <BotaoAcao>
                                    <Icon name="edit" type="material" color="white" />
                                </BotaoAcao>
                                <BotaoAcaoExcluir>
                                    <Icon name="delete" type="material" color="white" />
                                </BotaoAcaoExcluir>
                            </Acoes>
                        </QuestaoContainer>
                    ))}
                     </Add2>
                
               
            
        
    

                    
                </Container>
            </ThemeProvider>
        </ScrollView>
    );
}

const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE_BLUE};
`;
const Imgview = styled.View``;

const Title = styled.Text`
    font-size:  ${({theme}) => theme.FONT_SIZE.XXL} ;
    font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE} ;
    text-align: center;
`;

const Subtitle = styled.Text`
    font-size:  ${({theme}) => theme.FONT_SIZE.LG} ;
    color: ${({theme}) => theme.COLORS.WHITE} ;
`;

const Section = styled.View`
    block-size:auto;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    gap:50;
`;

const Apresentacao = styled.View`
    align-items: center;
    margin-top: -450;
`;

const Card = styled.View`
    height: 12rem;
    width: 25rem;   
    border-radius: 1rem;
    border-bottom-color:  ${({ theme }) => theme.COLORS.BLUE_250};
    border-bottom-width: 3px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    margin-top:300;
`;

const Botao = styled.Pressable`
    height: 2.5rem;
    width: 7rem;
    border-radius: 0.7rem;
    align-items: center;
    justify-content: center;
    margin-left:1rem;
    margin-top: 1rem;
    color:${({theme}) => theme.COLORS.WHITE};
    background-color:${({ theme }) => theme.COLORS.BLUE_250};
`;

const Subtitle3 = styled.Text`
    width: 25rem;
    padding-left: 1rem;
`;

const Letter = styled.View`
    width: 100%;
    padding-top: 90px;
`;

const Content = styled.Text`
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top:2rem;
`;

const Label = styled.Text`
    text-align: end;
    align-items: center;
    justify-content:center;
    width: 30%;
    font-weight: bolder;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250}; 
`;

const Add = styled.View`
    
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    margin-top:3rem;
    flex-direction: row;
    width: 80rem;
    margin-left:7rem;
    border-radius:2rem;
    
`;

const TextArea = styled.TextInput`
    height: 200px;
    width:720px;
    border-color: #ccc;
    border-width: 1px;
    border-radius:2rem;
    padding: 17px;
    
    margin-bottom: 16px;
    margin-top:2rem;
    margin-left:2rem;
`;

const PickerContainer = styled.View`
    height: 50;
    width: 200;
    
    margin-top:2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-direction:row
   
`;

const StyledPicker = styled(Picker)`
    height: 50px;
    width: 200;
    
`
const TextAreaContainer = styled.View`
    flex-direction: row;
    margin-left:2rem;
    align-items: center;
    
`;

const Circle = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px; /* Círculo */
    background-color: ${({ theme }) => theme.COLORS.BLUE_250};
    align-items: center;
    justify-content: center;
    
    
`;

const CircleText = styled.Text`
    color: white;
    font-weight: bold;
`
const TextArea2 = styled.TextInput`
    height: 80px;
    width:500px;
    border-color: #ccc;
    border-width: 1px;
    border-radius:2rem;
    padding: 10px;
    text-align: top;
    margin-bottom: 16px;
    margin-top:0.5rem;
    margin-left:0.5rem;
`;
const ViewQuestions = styled.View`
    flex-direction:column;
    margin-left:7rem;
`
const ViewQuestions1 = styled.View`
    flex-direction:column;
    
`
const ImageUploadContainer = styled.View`
    margin: 3rem 0;
    margin-bottom:10rem;
    align-items: center;
    
`;

const ImageContainer = styled.View`
    height: 300px; /* Defina a altura desejada */
    width: 300px; /* Defina a largura desejada */
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const SelectedImage = styled.Image`
    height: 100%;
    width: 100%;
`;

const PlaceholderText = styled.Text`
    font-size: 14px;
    color: gray;
`;

const UploadButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_250};
    border-radius: 5px;
    padding: 10px;
`;

const ButtonText = styled.Text`
    color: white;
    margin-left: 5px;
`;
const RoundButton = styled(Pressable)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: green;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const PickerContainer2 = styled.View`
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    width: 15px;
   
    
`;

const StyledPicker2 = styled(Picker)`
    height: 50px;
    width:15rem;
    
`;

const QuestaoContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TextoQuestao = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

const Acoes = styled.View`
    flex-direction: row;
    gap: 10px;
`;

const BotaoAcao = styled(Pressable)`
    background-color: #4CAF50;
    padding: 10px;
    border-radius: 5px;
`;

const BotaoAcaoExcluir = styled(Pressable)`
    background-color: #F44336;
    padding: 10px;
    border-radius: 5px;
`;
const Add2 = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    width: 65rem;
    align-self: center;
    margin-top:10px;
    height:30rem;
    padding: 10px;
    border-radius: 5rem;
    
`;