const help = (prefix, pushname2, premi, uptime, tanggal, pepolu, hayuk ) => {
    return `┌──「 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 」──
│
├  𝘼𝙇𝘿𝙀𝙑 𝘽𝙊𝙏𝙎
├  𝙊𝙒𝙉𝙀𝙍 : 𝘼𝙡𝙛𝙞𝙮𝙖𝙣𝘿𝙚𝙫
├  𝙋𝙍𝙀𝙁𝙄𝙓 : *${prefix}*
├  
│
├──「 𝘼𝘽𝙊𝙐𝙏 𝙊𝙒𝙉𝙀𝙍 」──
│
├  Name : AlfiyanDev
├  Instagram : @AlfiyanDev
├  WhatsApp : 0813-4207-7268
│
└──「 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 」──

┌──「 𝗠𝗘𝗗𝗜𝗔 𝗠𝗘𝗡𝗨 」──
│
├  ${prefix}ytsearch query
├  ${prefix}ytplay query
├  ${prefix}ytplay2 query
├  ${prefix}ytmp3 url_video
├  ${prefix}ytmp32 url_video
├  ${prefix}ytmp4 url_video
├  ${prefix}ytmp42 url_video
├  ${prefix}tiktoknowm url_video
├  ${prefix}tiktokmusic url_video
├  ${prefix}igdl url_post
├  ${prefix}fbdl url_video
├  ${prefix}jooxplay query
├  ${prefix}spotify url_music
├  ${prefix}spotifysearch query
├  ${prefix}pinterest query
├  ${prefix}pinterestdl url_pinterest
├  ${prefix}pixiv query
├  ${prefix}pixivdl url_pixiv
├  ${prefix}zippyshare url_zippyshare
├  ${prefix}telesticker url_pack
│
├─「𝙎𝙀𝘼𝙍𝘾𝙃𝙄𝙉𝙂」
│
├  ${prefix}shopee query
├  ${prefix}gimage query
├  ${prefix}google query
├  ${prefix}gimage2 query
├  ${prefix}konachan query
├  ${prefix}playstore query
├  ${prefix}stickerwa query
├  ${prefix}wallpapersearch query
├  ${prefix}wallpapersearch2 query
│
├──「𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂」
│
├  ${prefix}ytstalk
├  ${prefix}tkstalk
├  ${prefix}githubstalk
├  ${prefix}igstalk
├  ${prefix}twtstalk
│
├──「𝙋𝙍𝘼𝙔 𝙈𝙀𝙉𝙐」
│
├  ${prefix}listsurah
├  ${prefix}asmaulhusna
├  ${prefix}alquran no_surah
├  ${prefix}alquranaudio no_surah
├  ${prefix}alquranaudio no_surah/no_ayat
├  ${prefix}alquranaudio no_surah/no_ayat1-no_ayat2
├  ${prefix}kisahnabi nama_nabi
├  ${prefix}jadwalsholat daerah
│
├──「𝙁𝙄𝙇𝙈 & 𝙎𝙏𝙊𝙍𝙔」
│
├  ${prefix}drakorongoing
├  ${prefix}film query
├  ${prefix}lk21 query
├  ${prefix}wattpad url_wattpad
├  ${prefix}wattpadsearch query
├  ${prefix}cerpen
├  ${prefix}ceritahoror
│
├──「𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐」
│
├  ${prefix}wait
├  ${prefix}quotesanime
├  ${prefix}manga query
├  ${prefix}anime query
├  ${prefix}character query
├  ${prefix}kusonime url_kusonime
├  ${prefix}kusonimesearch query
├  ${prefix}otakudesu url_otakudesu
├  ${prefix}otakudesusearch query
├  ${prefix}nhentai kode_bom
├  ${prefix}nhentaipdf kode_bom
├  ${prefix}nhentaisearch query
├  ${prefix}nekopoi url
├  ${prefix}nekopoisearch query
│
├──「𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐」
│
├  ${prefix}quotes
├  ${prefix}quotesdilan
├  ${prefix}quotesanime
├  ${prefix}quotesimage
├  ${prefix}faktaunik
├  ${prefix}katabijak
├  ${prefix}pantun
├  ${prefix}bucin
├  ${prefix}randomnama
│
├──「 𝗢𝗧𝗛𝗘𝗥 」──
│
├  *${prefix}daftar*
├  *${prefix}request [pesan]*
├  *${prefix}report [pesan]*
├  *${prefix}owner*
├  *${prefix}donate*
├  *${prefix}setapikey*
├  *${prefix}setprefix*
├  *${prefix}setcr*
├  *${prefix}sticker*
├  *${prefix}stickerwm*
├  *${prefix}takestick*
├  *${prefix}toimg*
├  *${prefix}togif*
├  *${prefix}ocr*
├  *${prefix}shortlink*
├  *${prefix}addprem*
├  *${prefix}dellprem*
├  *${prefix}listprem*
├  *${prefix}sider*
│
├──「 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 」──
│
├  WAKTU AKTIF :
├  ${kyun(uptime)}
│
└──「 𝘼𝙇𝘿𝙀𝙑 𝘽𝙊𝙏𝙎 」`
}
exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

const donate = (sender) => {
    return `𝘿𝙊𝙉𝘼𝙎𝙄 𝘽𝙊𝙏
  PULSA : 0895605958300
  OVO : 081342077268
  LINKAJA : 081342077268
  「 𝘼𝙇𝘿𝙀𝙑 𝘽𝙊𝙏𝙎 」`
}
exports.donate = donate


const rendom = (sender) => {
    return `┌──「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 」──
│
├─「 *RANDOM TEXT*」
│
├  ${prefix}quotes
├  ${prefix}quotesdilan
├  ${prefix}quotesanime
├  ${prefix}quotesimage
├  ${prefix}faktaunik
├  ${prefix}katabijak
├  ${prefix}pantun
├  ${prefix}bucin
├  ${prefix}randomnama
│
├─「 *RANDOM IMG*」
│
├  ${prefix}art
├  ${prefix}bts
├  ${prefix}exo
├  ${prefix}elf
├  ${prefix}loli
├  ${prefix}neko
├  ${prefix}waifu
├  ${prefix}shota
├  ${prefix}husbu
├  ${prefix}sagiri
├  ${prefix}shinobu
├  ${prefix}megumin
├  ${prefix}wallnime
├  ${prefix}chiisaihentai
├  ${prefix}trap
├  ${prefix}blowjob
├  ${prefix}yaoi
├  ${prefix}ecchi
├  ${prefix}hentai
├  ${prefix}ahegao
├  ${prefix}hololewd
├  ${prefix}sideoppai
├  ${prefix}animefeets
├  ${prefix}animebooty
├  ${prefix}animethighss
├  ${prefix}hentaiparadise
├  ${prefix}animearmpits
├  ${prefix}hentaifemdom
├  ${prefix}lewdanimegirls
├  ${prefix}biganimetiddies
├  ${prefix}animebellybutton
├  ${prefix}hentai4everyone
├  ${prefix}bj
├  ${prefix}ero
├  ${prefix}cum
├  ${prefix}feet
├  ${prefix}yuri
├  ${prefix}trap
├  ${prefix}lewd
├  ${prefix}feed
├  ${prefix}eron
├  ${prefix}solo
├  ${prefix}gasm
├  ${prefix}poke
├  ${prefix}anal
├  ${prefix}holo
├  ${prefix}tits
├  ${prefix}kuni
├  ${prefix}kiss
├  ${prefix}erok
├  ${prefix}smug
├  ${prefix}baka
├  ${prefix}solog
├  ${prefix}feetg
├  ${prefix}lewdk
├  ${prefix}waifu
├  ${prefix}pussy
├  ${prefix}femdom
├  ${prefix}cuddle
├  ${prefix}hentai
├  ${prefix}eroyuri
├  ${prefix}cum_jpg
├  ${prefix}blowjob
├  ${prefix}erofeet
├  ${prefix}holoero
├  ${prefix}classic
├  ${prefix}erokemo
├  ${prefix}fox_girl
├  ${prefix}futanari
├  ${prefix}lewdkemo
├  ${prefix}wallpaper
├  ${prefix}pussy_jpg
├  ${prefix}kemonomimi
├  ${prefix}nsfw_avatar
├  ${prefix}ngif
├  ${prefix}nsfw_neko_gif
├  ${prefix}random_hentai_gif
│
│
└──「 𝘼𝙇𝘿𝙀𝙑 𝘽𝙊𝙏𝙎 」`
}
exports.rendom = rendom

const bahasa = () => {
    return `
List Bahasa :
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa
