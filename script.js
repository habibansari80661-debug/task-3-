function checkAnswer(answer) {
    if(answer === 'a') {
        document.getElementById("result").innerHTML =
        "Correct Answer!";
    }
    else {
        document.getElementById("result").innerHTML =
        "Wrong Answer!";
    }
}

async function getJoke() {
    const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
    );

    const data = await response.json();

    document.getElementById("joke").innerHTML =
        data.setup + "<br>" + data.punchline;
}