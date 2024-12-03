
import express from 'express'
import sql from './database.js'
import jwt from 'jsonwebtoken'
import { expressjwt } from "express-jwt"
import { v4 as uuidv4 } from 'uuid'
import s3Client from './configAWS.js'
import {
    DeleteObjectCommand,
    PutObjectCommand,
} from "@aws-sdk/client-s3";

// AWSCompromisedKeyQuarantineV2 não deu para usar

// expressjwt({ secret: 'keys_hub', algorithms: ["HS256"]})

const router = express.Router()

router.get('/', async (req, res)=>{
        try{
        const data = await sql`select * from usuario`;
        return res.status(200).json(data)
    }
    catch{
        return res.status(404).json(`error`)
    }
})

router.post('/login', async (req, res)=>{
    try {
        const { email, senha } = req.body;
        if(email != null && email != "" && senha != null && senha != "")
        {
            const data = await sql`select id, nome from Usuario where email = ${email} and senha = ${senha}`;
            if(data.length == 0)
            {   
                return res.status(204).json('usuario ou senha incorreta')
            }
            //const token = jwt.sign({ email: email }, 'keys_hub', { algorithm: 'HS256' });
            console.log()
            return res.status(200).json({msg: 'ok'})
        }
            return res.status(400).json("bad request");

    } 
    catch (error){
        console.log(error)
        return res.status(500).json('Error on server!')
    }
})

router.get('/areas', async(req, res) =>{

    try{

        const areas = await sql `select * from grande_area`
    
        return res.status(200).json(areas)
    }catch(error){
        console.log(error)
        return res.status(500).json('Error on server!')
    }
})


router.get('/subareas', async(req, res) =>{

    try{

        const materia = await sql `select * from materia`
    
        return res.status(200).json(materia)
    }catch(error){
        console.log(error)
        return res.status(500).json('Error on server!')
    }
})

router.post('/questao/new', async(req, res)=>{
    try{
            
    let fileName = null;

    // devolver if para checar se existe ou nao imagem
    if(req.body.image)
    {
        fileName = `${uuidv4()}.jpeg`

        let buffer = Buffer.from(req.body.image, 'base64');

        await s3Client.send(
            new PutObjectCommand({
                ContentType: "image/jpeg",
                Bucket: 'quimicainbox',
                Key: fileName,
                Body: buffer,
            }),
        );
    }
 
    const { enunciado,
        alternativa_a, 
        alternativa_b, 
        alternativa_c, 
        alternativa_d, 
        alternativa_e, 
        correta, 
        nivel,
        materia } = req.body


    await sql`insert into questao(
                enunciado,
                imagem,
                alternativa_a,
                alternativa_b,
                alternativa_c,
                alternativa_d,
                alternativa_e, 
                correta, 
                nivel) 
              values(${enunciado}, 
                     ${`https://quimicainbox.s3.sa-east-1.amazonaws.com/${fileName}`}, 
                     ${alternativa_a}, 
                     ${alternativa_b}, 
                     ${alternativa_c}, 
                     ${alternativa_d}, 
                     ${alternativa_e}, 
                     ${correta},
                     ${nivel})`        

                     
    const last_id = await sql`SELECT id FROM questao ORDER BY id DESC LIMIT 1`
    // last_id[0].id

    await sql`insert into questao_materia(id_questao, id_materia) values(${last_id[0].id}, ${materia})`

    return res.status(200).json('Sucess')
    
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }

}) 

router.get('/questoes/:grande_area/:materia/:nivel', async (req, res)=>{

        try{
            const{ grande_area, materia, nivel } = req.params; // tem que vir o id

            if(grande_area != null && materia == 0 && nivel == 0){

            const busca_area = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel
                                        from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as 
                                        qm on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where ga.id = ${grande_area} `

                return res.status(200).json(busca_area) 
            }
            if(grande_area == 0 && materia != null && nivel == 0){

            const busca_materia = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as qm 
                                        on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where m.id = ${materia}`

                return res.status(200).json(busca_materia)
            }
            if(grande_area == 0 && materia == 0 && nivel != null){
                
            const busca_nivel = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as qm 
                                        on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where q.nivel = ${nivel}`

                return res.status(200).json(busca_nivel)
            }
            if(grande_area != null && materia != null && nivel == 0){

            const busca_gm = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as
                                        qm on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where ga.id = ${grande_area} 
                                        and m.id = ${materia}`

                return res.status(200).json(busca_gm)
            }
            if(grande_area == 0 && materia != null && nivel != null){

            const busca_mn = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as qm 
                                        on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where m.id = ${materia} 
                                        and q.nivel = ${nivel}`

                return res.status(200).json(busca_mn)
            }
            if(grande_area != null && materia == 0 && nivel != null){
                
            const busca_gn = await sql`select DISTINCT q.id, 
                                        q.enunciado, 
                                        q.imagem, 
                                        q.alternativa_a, 
                                        q.alternativa_b, 
                                        q.alternativa_c, 
                                        q.alternativa_d,
                                        q.alternativa_e,
                                        q.correta,
                                        q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as qm 
                                        on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where ga.id = ${grande_area} 
                                        and q.nivel = ${nivel}`

                return res.status(200).json(busca_gn)
            }

            const busca = await sql`select DISTINCT q.id, 
                                    q.enunciado, 
                                    q.imagem, 
                                    q.alternativa_a, 
                                    q.alternativa_b, 
                                    q.alternativa_c, 
                                    q.alternativa_d,
                                    q.alternativa_e,
                                    q.correta,
                                    q.nivel from grande_area as ga inner join materia as m on m.id_area = ga.id inner join questao_materia as qm 
                                    on m.id = qm.id_materia inner join questao as q on m.id = qm.id_materia where ga.id = ${grande_area} 
                                    and m.id = ${materia} and q.nivel = ${nivel}`

            return res.status(200).json(busca)
    
        } 
        catch(error){
            console.log(error)
            return res.status(500).json('error ao encontrar')
        }
})

router.put('/questao/alterar/image/:fileName', async (req, res) =>{    
   try {

    let buffer = Buffer.from(req.files.image, 'base64')

    const { fileName } = req.params
    const { image } = req.files
    await s3Client.send(
        new PutObjectCommand({
            Bucket: 'quimicainbox',
            Key: `${fileName}.jpeg`,
            Body: buffer,
        }),
    );
    return res.status(200).json('sla')
    
   } catch (error) {
    return res.status(500).json(error)
   }
})

router.put('/questao/alterar/:id',  async (req, res) =>{
    // console.log(req.auth)
    // if (!req.auth.email) return res.status(401).json('Não autorizado');
        // res.status(200).json('autorizado!');

    try {

        const { enunciado,
                alternativa_a,
                alternativa_b,
                alternativa_c,
                alternativa_d,
                alternativa_e, 
                correta, 
                nivel } = req.body;
        const { id } = req.params;


        let sla= await sql`update questao set enunciado = ${enunciado}, alternativa_a = ${alternativa_a}, alternativa_b = ${alternativa_b}, 
        alternativa_c = ${alternativa_c}, alternativa_d = ${alternativa_d}, alternativa_e =  ${alternativa_e}, correta = ${correta}, nivel = ${nivel} where id = ${id}`
        return res.status(200).json(sla)
    } catch (error) {
        return res.status(500).json('error in update questão')
    }
})



router.delete("/questao/:id/:fileName", async(req, res)=>{
     try {

        const { id, fileName } = req.params;
    
        
        await sql`delete from questao where id = ${id}`

       if(fileName != 'null'){
        
            let sla = await s3Client.send(
            new DeleteObjectCommand({
                Bucket: 'quimicainbox',
                Key: `${fileName}.jpeg`            
            }),
            );
            if(sla.$metadata.httpStatusCode){

                return res.status(204).json('image inesistente')
            }
       }
        return res.status(200).json('ok')
    } catch (error) {
        return res.status(500).json('error to delete questao', console.log(error))
    }
})

router.get('/teste/:materia', async (req, res)=>{
    //console.log(req.auth)
    //if (!req.auth.email) return res.status(401).json('Não autorizado');
        //res.status(200).json('autorizado!');
    try{
        const{ materia } = req.params; // tem que vir o id

        const teste = await sql`select q.id, q.enunciado, q.imagem, q.alternativa_a, q.alternativa_b, q.alternativa_c, alternativa_d, 
alternativa_e, correta, nivel from materia as m inner join questao_materia as qm on qm.id_materia = m.id inner join questao as q 
on q.id = qm.id_questao where m.id = ${materia} ORDER BY RANDOM() LIMIT 20`
return res.status(200).json(teste)
    } 
    catch(error){
        console.log(error)
        return res.status(500).json('error ao encontrar')
    }
})

router.delete("/testzin/:fileName", async (req, res) => {
    try {

        const { fileName } = req.params

        let sla = await s3Client.send(
            new DeleteObjectCommand({
                Bucket: 'quimicainbox',
                Key: `${fileName}.jpeg`,
            }),
        );

        if(sla.$metadata.httpStatusCode){

            return res.status(204).json('image inesistente')
        }

        return res.status(200).json('ok')
    } 
    catch (error) {
        console.log(error)
        return res.status(500).json('error ao encontrar')
    }
}) 
export default router
