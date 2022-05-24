const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6287705048235']
global.ownerNumber = ["6287705048235@s.whatsapp.net"]
global.namabotnya = 'KirBotz'
global.namaownernya = 'Akira'
global.packname = '© KirBotz||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0877-0504-8235\nYT : KirBotz×'
global.sessionName = 'kirbotz'
global.lolkey = 'RINTISAJA'
global.email = 'tesheroku123@gmail.com'
global.group = 'https://bit.ly/38oNU0D'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://bit.ly/3yk3gOo'
global.github = 'https://bit.ly/3FqVBj8'
global.nomorowner = 'https://wa.me/6287705048235'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./kirbotzjs/image/thumb.jpg')
global.imagekir = fs.readFileSync('./kirbotzjs/image/kirbotz.jpg')
global.videokir = fs.readFileSync('./kirbotzjs/image/kirbotz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})