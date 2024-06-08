require('dotenv').config();
module.exports = {
    SUPPORT_SERVER: 'https://discord.gg/darkcityrp',
    OWNER_ID: "800265791043534848",// Your discord id
    CLIENT_ID: '1247209531084374098',// Your Bot id
    PREFIX: '!',// Your general prefix
    PERMISSIONS: '8',
    BOT_PRESENCE: {
        ENABLED: true, // Whether or not the bot should update its status
        STATUS: "dnd", // The bot's status [online, idle, dnd, invisible]
        TYPE: 1, // Status type for the bot [PLAYING = 0 | STREAMING = 1 | LISTENING = 2 | WATCHING = 3 | CUSTOM = 4 | COMPETING = 5 ]
        MESSAGE: "at Kings Music", // Your bot status message, {users} = users size on all the servers | {servers} = servers size that are available
    },
    DASHBOARD: {
        ENABLED: true, // true, if you want the dashboard to be shown, false otherwise [disabled]
        CLIENT_ID: process.env.CLIENT_ID || "", // your bot client ID
        CLIENT_SECRET: process.env.CLIENT_SECRET || "", // your bot client secreti
        PASSWORD: process.env.TOP_SECRET_PASSWORD || "mypassword", // your top secret password, you can change it to anything you want
        PORT: process.env.PORT || 80, // your dashboard port number
        dashboardURL: "https://c21c15b8-63bf-44f9-9a5e-22c2275f551d-00-3l5fcqwbsatnd.sisko.replit.dev", // change it to your dashboard url
        callbackURL: "/auth", //don't change this
    },
    MUSIC: {
        IDLE_TIME: 10,//time in seconds before the client disconnects from the voice channel.
        A24: false, // true = continue playing 24/7H, false = stop playing when no one listens to the bot
    },
    NODES: [  
        {
            host: "node.raidenbot.xyz",
            identifier: 'main1',
            port: 5500,
            password: "pwd",
            secure:  false,
            retryAmount: 30,
            retryDelay: 10000
        },
    ],
    SPOTIFY:{
        CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        CLIENT_SECRET: process.env.SPOTIFY_CLIENT_ID_SECRET,
        ALBUM_LIMIT: 1,
        PLAYLIST_LIMIT: 1,

    },
    GENIUS: {
       TOP_SECRET_API_KEY: process.env.TOP_SECRET_API_GENIUS
    },
    EMBED_COLORS: {
        RED: '#ff0000',
        BLUE: '#0000ff',
        GREEN: '#00ff00',
        BLACK: '#000000',
        YELLOW: '#ffdf00',
        PINK: '#cd919e',
        PURPLE: '#86608e',
    },
    webhookURL: {
        JOIN: '',// Your join webhook URL
        LEAVE: ''// Your leave Webhook URL
    }
}
