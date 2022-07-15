//https://api.nasa.gov/planetary/apod?api_key=RrXRfCExcIWvsNBWZbc6kxCLEZ73oK3jCw99Qn5W

async function image_handler() {
    let date = document.getElementById("date").value;
    let image_url = `https://api.nasa.gov/planetary/apod?&api_key=RrXRfCExcIWvsNBWZbc6kxCLEZ73oK3jCw99Qn5W&date=${date}`;
    let response = await fetch(image_url);
    let image_data = await response.json();
    let url = image_data.url;
    let explanation = image_data.explanation;
    document.querySelector(".image").src = url;
    document.querySelector(".img_description").innerHTML = explanation;
    document.getElementById("img_container").style.display = 'block';
}
