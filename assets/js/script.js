/**
 * Se eu usar var é de variável, siginifica que ela pode mudar.
 * Se eu usar const de constante, significa que ela não muda, ela pe constante.
 * Posso usar let, tbm serve como constante, ela pode estar ali o lef, mas se n for chamado, ele n faz nada.
 * Quando estou declarando minha variavel ou constante, ela vai dentro de ''.
 * O sinal de = é que estou recebendo tal valor.
 * Declarando minhas variáveis
 */

let email = 'chelleduso@gmail.com';

email = 'chelleduso@gmail.com';

console.log(email);
console.log('o seu e-mail é: ' + email);
console.log(`O seu e-mail é ${email}`);


/**
 * Criando Eventos e escutas para estes eventos!
 * addEventListener adicionando o evento ('click', e => { É captura o evento, ele esta capturando o evento que stou passando para ele fazer.)
*/

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário.');

});


/**
 * O que muda usando querySelector, é que vamos usar o elemento do CSS nele #.
 */

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário.');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault(); /**Este comando falo para ele cancelar o comportamento da tela, quando envio o formulário e da msg de erro "Página n encontrada." */

    /** console.log('Formulário enviado! Aqui vai o Ajax.'); Ajax quer dizer quando clico e fala tela de login efetuado com sucesso. */

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email: email,
        password: password
    };

    /** 
    console.log(json); /**Json objeto */

    /** let stringJSON = JSON.stringify(json); /**Json String */

    /**console.log(stringJSON);

   let jsonParse = jsonParse(stringify); O método Parse ele lê o texto ele valida aquilo como umobjeto real.*/

    /**console.log(jsonParse);
    */

    if (!json.email) { /** if é uma condição ele verifica se uma condição é verdadeira- Se email for igual == ah isso, então faça o que o comando ta pedindo */
        /** !siginifica not - não, Se não tem nada então retorna x valor */
        console.error("O campo e-mail de ser preenchido!");

    } else if (!json.password) { /** Se não caiu nesta primeira então tenta a segunda */

        console.error("O campo password deve ser preenchido!");

    } else {

        console.info("Dados validados com sucesso!");


    }
});


