const Eris = require("eris");
const client = new Eris(require("./config.json").token);

//Variáveis 
const prefix = "$"

//Eventos

client.on('ready', () => {
    //coisas que aparecerão quando o bot iniciar
    console.log('Executando...'); // console will says quando executar 
});

client.on('messageCreate', message => {  //comandos que vão retornar strings/frases no Discord Creat

    //coisas que farão o bot ignorar caso (event) 
    if(message.author.bot) return; //se o autor da mensagem == bot 
    console.log()
});

client.connect();