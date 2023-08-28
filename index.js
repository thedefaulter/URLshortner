async function getData() {
	const url_1 = document.getElementById("URL_1").value;
	
	const url = 'https://api.shrtco.de/v2/shorten?url=' + url_1;
	const query = {
		method: 'GET',
	}
	
	try {
		const response = await fetch(url, query);
		const result = await response.json();
		console.log(result);

		const shortLink = result.result.full_short_link;
		document.getElementById('full_short_link').innerHTML = `<a href = "${shortLink}" target = 'blank'>${shortLink}</a>`
		
	} catch (error) {
		console.error(error);
	}
}