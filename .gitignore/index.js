const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NDEwODY0OTIwMjIxOTc0NTI4.DVzXdw.S0lq_2k6M9cDUMdVB5QlOJYAtGY";
var prefix = ".";
var mention = "<@410864920221974528>";
var memberCount = client.users.size;
var servercount = client.guilds.size;

client.on("ready", () => {
	var servers = client.guilds.array().map(g => g.name).join(',');
	console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienter! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

client.on('message', message => {
	if (message.content === ("test")){
	message.reply('test !');
} else if (message.content === ("bonjour")){
	message.reply('Que puis-je faire pour vous ? Ho Ho Ho ');
} else if (message.content === ("!dingo")){
	message.reply('Que puis-je faire pour vous ? Ho Ho Ho ');
} else if(message.content.startsWith('!botname')){
	client.user.setUsername(message.content.substr(9));
} else if (message.content === "!musique") {
	let m = " ";
	m += 'Je ne peux pas encore le faire.. \n';
	m += '';
	m += ' \n';
}
});

client.login(token)
