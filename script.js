function generateComic() {

    const idea =
        document.getElementById("storyIdea").value.trim();

    const genre =
        document.getElementById("genre").value;

    const style =
        document.getElementById("style").value;

    const loading =
        document.getElementById("loading");

    const result =
        document.getElementById("result");

    const output =
        document.getElementById("comicOutput");


    if (idea === "") {

        alert("Please enter your comic idea.");

        return;
    }


    loading.classList.remove("hidden");

    result.classList.add("hidden");


    setTimeout(() => {

        loading.classList.add("hidden");

        result.classList.remove("hidden");


        output.innerHTML = `

            <h4>Comic Idea</h4>

            <p>${idea}</p>

            <br>

            <h4>Genre</h4>

            <p>${genre}</p>

            <br>

            <h4>Style</h4>

            <p>${style}</p>

            <br>

            <h4>AI Generated Story</h4>

            <p>
                Your AI-generated comic story will appear here
                after connecting the frontend to the backend
                Generative AI API.
            </p>

        `;

    }, 1500);

}