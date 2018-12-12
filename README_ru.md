<p align="center"><b>🛠️ Этот репозиторий был создан с использованием <a href="https://gitupload.com">GitUpload</a>.</b></p>
<p align="center"><a href="https://sigmasms.com"><img src="https://github.com/markolofsen/sigma_sms//blob/master/.banners/banner_ru.jpg?raw=1" /></a></p>
<p align="center"><b>Languages:</b><br /><a href="https://github.com/markolofsen/sigma_sms/blob/master/README_de.md">🇩🇪 Deutsch</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README.md">🇬🇧 English</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_es.md">🇪🇸 Spanish</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_fr.md">🇫🇷 French</a> | <a href="https://github.com/markolofsen/sigma_sms/blob/master/README_it.md">🇮🇹 Italian</a> | <b>🇷🇺 Russian</b></p>

---

Версия = 0.0.6 <br />
Название библиотеки = sigma_sms <br />
Название = Sigma SMS API gate <br />
Ключевые слова = API,  Gate,  SMS,  SMS Gate,  Sigma,  Phone,  Node,  React JS,  React Native,  Vue,  Angular,  Javascript <br />

### Горячая установка

```sh
yarn add sigma_sms
```


### Как пользоваться

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

<p align="center"><b>🛠️ Этот репозиторий был создан с использованием <a href="https://gitupload.com">GitUpload</a>.</b></p>