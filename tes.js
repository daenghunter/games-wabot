
					case 'play':
				if (!isRegistered) return reply( ind.noregis())
				if (!isPrem) return reply('Hmm.. Kayaknya kamu bukan member PREMIUM deh :(  ')
            //    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				lolteam.updatePresence(from, Presence.recording) 
				if (args.length < 1) return reply('Judulnya apa beb?')
				reply('[🙉] sabar sayang sedang proses')
				play = body.slice(9)
				anu = await fetchJson(`https://alfiyandev.herokuapp.com/api/play/mp3?query=${play}&apikey=alfiyan`, {method: 'get'})
				ini_info = `Judul: ${anu.result.title}\n\n Size: ${anu.result.size}\n\n Duration: ${anu.result.duration}\n\n Source: ${anu.result.source}\n\n TUNGGU SEBENTAR LAGI DIKIRIM \n JANGAN SPAM YA BEB`
				buffer = await getBuffer(anu.result.thumbnail)
				lagu = await getBuffer(anu.result.url_audio)
				lolteam.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: lol})
				lolteam.sendMessage(from, buffer, image, {quoted: lol, caption: ini_info})
			break 