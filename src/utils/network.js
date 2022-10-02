import { HTTP, HTTPS } from "../constants/api"

/**
 * Change URL HTTP on HTTPS
 * @param {String} url - url for change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = url => {
	const result = url ? url.replace(HTTP, HTTPS) : url

	return result
}

/**
 * Sends a request Fetch
 * @param {String} url - url for request
 * @returns {Promise} - Promise with result request
 */
export const getApiResource = async url => {
	try {
		const res = await fetch(url)
		if (!res.ok) {
			console.error("Error error...", res.status)
			return false
		}
		return await res.json()
	} catch (error) {
		console.error("Could not fetch...", error.message)
		return false
	}
}

export const makeConcurrentRequest = async url => {
	const res = await Promise.all(
		url.map(res => {
			return fetch(res).then(res => res.json())
		})
	)
	return res
}
