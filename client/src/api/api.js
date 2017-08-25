import rp from 'request-promise'

const stageMode = process.env.REACT_APP_STAGE_MODE
let baseUrl = "http://localhost:3000";
let apiBase = "";
let developmentMode = 'development'

const defaultOptions = {
	baseUrl: baseUrl + apiBase,
	json: true,
	// gzip: true
}

function handleRequest(options) {
  return rp(options)
    .then(data => {
      return data
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}

export function getWorkgroups() {
	const options = Object.assign({}, defaultOptions, {
		baseUrl: baseUrl,
		method: 'GET',
		uri: '/workgroups'
	})

	return handleRequest(options).catch(err => {
		throw err
	})
}