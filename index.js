import express from 'express';
import path from 'path';
const host = '0.0.0.0';
const porta = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

let listaUsuarios = [];

app.use(express.static(path.join(process.cwd(), 'pagina')));
function formulario(requisicao, resposta){
    const cnpj = requisicao.body.cnpj;
    const razao_social = requisicao.body.razao_social;
    const nome_fantasia = requisicao.body.nome_fantasia;
    const cidade = requisicao.body.cidade;
    const uf= requisicao.body.uf;
    const cep = requisicao.body.cep;
    const email = requisicao.body.email;
    const telefone = requisicao.telefone;

    
    if (nome && sobrenome && usuario && cidade && estado && cep) 
    {
        listaUsuarios.push({
            cnpj: cnpj,
            razao_social: razao_social,
            nome_fantasia: nome_fantasia,
            cidade: cidade,
            uf: uf,
            cep: cep,
            email:email,
            telefone:telefone,
            });
        resposta.redirect('/listarUsuarios');
    }
    else{
        resposta.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`)
    }

    app.listen(porta, host, () => {
        console.log(`Servidor rodando em http://${host}:${porta}`);
    })