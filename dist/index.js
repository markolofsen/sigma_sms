const axios = require('axios');


/*
 * UNIVERSAL API FETCHERS
 */
class API {
  constructor(path) {
    this.path = path
    this.path = `https://online.sigmasms.ru/api/${this.path}`;

    console.log(this.path)
  }

	async get() {
    console.log(`GET`);
		return await axios.get(this.path).then(res => res)
  }
	async post(data={}) {
    console.log(`POST`);
		return await axios.post(this.path, data).then(res => res)
  }
  async delete(data) {
    console.log(`DELETE`);
		return await axios.delete(this.path).then(res => res)
  }

  async upload(file) {
    console.log(`UPLOAD`);
    return await axios.post(this.path, file, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
  }

}

class SIGMA {

	constructor(username, password) {

		this.default_sender = 'B-Media'
		this.username = username
		this.password = password

	}

	async token() {
		const {username, password} = this
		return await new API('login').post({username, password}).then(res => {

			const {token} = res.data
			axios.defaults.headers.common['charset'] = 'utf-8'
			axios.defaults.headers.common['Content-Type'] = 'application/json'
			axios.defaults.headers.common['Authorization'] = token
			// console.log(`Token ${token}`)
			return token
		})
	}

	async send(sender_name=this.default_sender, message, recipients) {
		await new SIGMA(this.username, this.password).token()

		const post = {
				"recipient": recipients,
				"type": "sms",
				"payload": {
						"sender": sender_name,
						"text": message,
				}
		}

		return await new API('sendings').post(post)

  }

	async status(msg_id) {
		await new SIGMA(this.username, this.password).token()
		return await new API(`sendings/${msg_id}`).get()
	}
}



module.exports = SIGMA
