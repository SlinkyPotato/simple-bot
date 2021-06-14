import dotenv from 'dotenv';
import { Client } from 'discord.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { prefix } = require('./config.json');

dotenv.config();
const client = new Client();

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
	// check for prefix before handling
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	// retrieve arguements from message
	const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	// handle commands

	if (command === (`help`)) {
		console.log("show all available comamnds path");
		msg.reply('here all of the commands that is supported');

	} else if (command === (`bounty`)) {
		console.log("do something with bounty plus command");
		msg.reply('bounty posted!');

	} else if (command === `server`) {
		msg.reply(`This server is: ${msg.guild.name}`);

	} else if (command === 'args') {
		if (!args.length) {
			return msg.reply('missing arguments');
		}
		msg.reply(`Command: ${command}\nArguments: ${args}`);
	} else {

	}
});

client.login(process.env.DISCORD_TOKEN);

function initFirebase() {
	const config = { 
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET
	};
	firebase.initializeFirebase(config);
	return firebase.database();
}
