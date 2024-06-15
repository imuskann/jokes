const btn = document.getElementById("joke-btn");
const text = document.getElementById("joke-text");

btn.addEventListener("click", getJokes);
text.style.display = "none";

// define an async function
async function getJokes() {
  try {
    //make a GET request to the API
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    //Check if the response is ok (status code: 200-299)
    if (!response.ok) {
      throw new Error("Request failed with status:" + response.status);
    }

    //parse the JSON from the response
    const data = await response.json();
    text.style.display = "block";
    text.innerText = data.value;
  } catch (error) {
    text.innerText = "An error occurred. Please try again";
    console.error("Fetch error:", error);
  }
}
