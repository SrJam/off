
    //Argumentos
    /*let args = message.content.slice(prefix.length).trim().split(' '); //cortar a frase do coamndo por argumentos. (RETURN) ex: se o comando for "eu amo maça", o args[0] = "eu", args[1] = "amo", args[3] = "maça"
    let command = args.shift().toLowerCase(); //Vai dar retorn no comando do adm, ex comando !oi return 'oi'

    //comandos
    switch (command) {
        case "jam":
            client.createMessage(message.chanel.id, "Meu dono.");
            break;
        
        case "pedro":
            client.creatMessage(message.channel.id, "Melhor amigo do dono");
            break;

        case "color":
            client.creatMessage(message.channel.id, "Senpai do dono");
            break;

        default:
            client.creatMessage(message.channel.id, `${command} não está registrado  :(`)
            break;

}})


client.connect() //Discord Conne