<p align="center"><b>🛠️ Dieses Repository wurde mit <a href="https://gitupload.com">GitUpload</a> erstellt.</b></p>
<p align="center"><a href="https://sigmasms.com"><img src="https://github.com/markolofsen/sigma_sms//blob/master/.banners/banner_de.jpg?raw=1" /></a></p>
<p align="center"><b>Languages:</b><br /><b>🇩🇪 Deutsch</b> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README.md">🇬🇧 English</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_es.md">🇪🇸 Spanish</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_fr.md">🇫🇷 French</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_it.md">🇮🇹 Italian</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_ru.md">🇷🇺 Russian</a></p>

---

Version = 0.0.6 <br />
Bibliotheksname = sigma_sms <br />
Titel = Sigma SMS API gate <br />
Schlüsselwörter = API,  Gate,  SMS,  SMS Gate,  Sigma,  Phone,  Node,  React JS,  React Native,  Vue,  Angular,  Javascript <br />

### Heiß zu installieren

```sh
yarn add sigma_sms
```


### Wie benutzt man

```javascript
const SIGMA = require('sigma_sms');

const username = '****'
const password = '****'
const sender_name = 'B-Media'

new SIGMA(username, password).send(sender_name, 'What about 11?', ['+346400000',]).then(res => {

	console.log('send() :: RESPONSE')
	console.log(res.data)

	const {id} = res.data
	if(id) {
		new SIGMA(username, password).status(id).then(res => {
			console.log('status() :: RESPONSE')
			console.log(res.data)
		})
	}

}).catch(err => {
	const msg_err = `API Error :: response status ${err.response.status}`
	console.log(msg_err)
	return msg_err
})

```



---

<p align="center"><b>🛠️ Dieses Repository wurde mit <a href="https://gitupload.com">GitUpload</a> erstellt.</b></p>