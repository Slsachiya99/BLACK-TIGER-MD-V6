/**

   * Create By THE JO BOT

   * Base by Dika Ardnt

*/



const fs = require('fs')

const chalk = require('chalk')



// Website Api

global.APIs = {

	zenz: 'https://zenzapis.xyz',
}



// Apikey Website Api

global.APIKeys = {

	'https://zenzapis.xyz': 'Your Key',

}





global.ownername = 'SACHIYA BOT'

global.autorecording = false //status auto merekam ( auto record )

global.autoketik = false //status auto mengetik (auto typing)

global.available = false //status online (online)

// Other

global.owner = ['94767233346','94767233346','94767233346']

global.premium ['94767233346']

global.packname = 'SACHIYA MD BOT'

global.author = 'SACHIYA'

global.wlcm = []

global.sessionName = 'session'

global.prefa = ['','!','.','🐦','🐤','🙄']

global.sp = '♲'

global.mess = {

    success: '✓ Success',

    admin: 'Fitur Khusus Admin Group!',

    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',

    owner: 'Fitur Khusus Owner',

    group: 'Fitur Digunakan Hanya Untuk Group!',

    private: 'Fitur Digunakan Hanya Untuk Private Chat!',

    bot: 'Fitur Khusus Pengguna Nomor Bot',

    wait: 'Loading...',

    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',

}

global.limitawal = {

    premium: "Infinity",

    free: 100

}

global.thumb = fs.readFileSync('./lib/jo.jpg')

global.visoka = { url: 'https://i.imgur.com/XHhlqtK.jpeg' }



let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})
