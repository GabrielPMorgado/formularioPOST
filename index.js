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
    const endereco = requisicao.body.endereco;

    
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
            endereco: endereco,
            });
        resposta.redirect('/listarUsuarios');
    }
    else{

        resposta.write(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form method="POST" action='/cadastrarEmpressa'>
            <label for="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" name="cnpj" value="${cnpj}" required>`);
            if (cnpj == ""){
                resposta.write(`
                            <div m-2 class="alert alert-danger" role="alert">
                                Por favor, informe o cnpj.
                            </div>
                `);
            }
            resposta.write(`
            <label for="razao_social">Razão Social ou Nome do Fornecedor:</label>
            <input type="text" id="razao_social" name="razao_social" placeholder="Moraes & irmãos Ltda" value="${razao_social}"required>`);
            if (razao_social== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, informe a razão social.
                                </div>`);
            } 
            resposta.write(`<label for="nome_fantasia">Nome Fantasia:</label>
            <input type="text" id="nome_fantasia" name="nome_fantasia" placeholder="Loja do 1,99"  value="${nome_fantasia}"required>`);  
            if (nome_fantasia== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, o nome.
                                </div>`);
            } 
            resposta.write(`<label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco"   value="${endereco}"required>`);
            if (endereco== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, informe o endereço.
                                </div>`);
            } 
            resposta.write(` <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>`);
            if (cidade== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, informe a cidade.
                                </div>`);
            } 
            resposta.write(` <label for="uf">UF:</label>
            <input type="text" id="uf" name="uf" maxlength="2" required>`);
            if (uf== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, informe sua região.
                                </div>`);
            } 
            resposta.write(`<label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" value="${cep}"required>`);
            if (cep== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, o cep.
                                </div>`);
            } 
           resposta.write(`<label for="email">Email:</label>
           <input type="email" id="email" name="email" value="${email}"required>`);
           if (email== ""){
            resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                Por favor, o email.
                            </div>`);
            } 
            resposta.write(`<label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" value="${telefone}"required>`);
            if (telefone== ""){
                resposta.write(`<div m-2 class="alert alert-danger" role="alert">
                                    Por favor, informe o seu telefone.
                                </div>`);
            } 
            resposta.write(` 
            <div class="buttons">
                 <button type="submit">Cadastrar</button>
                 <button type="button" onclick="history.back()">Voltar</button>
             </div>
             </form>
             </div>
             </body>
             </html>`);
             resposta.end(); 
            }
        
        }



  
    app.listen(porta, host, () => {
        console.log(`Servidor rodando em http://${host}:${porta}`);
    })