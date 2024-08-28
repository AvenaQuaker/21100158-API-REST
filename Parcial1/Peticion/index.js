let boton = document
    .getElementById("btn")
    .addEventListener("click", async () => {
        let section = document.getElementById("section");

        let response = await fetch("https://api.api-ninjas.com/v1/facts", {
            headers: {
                "X-API-KEY": "y8U2QzJenSEd5cdX3uh70g==iygdDJ40r18emB6d",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            let data = await response.json();

            let cajilla = document.createElement("p");
            cajilla.className = "p-3 bg-blue-200 rounded-md";
            cajilla.textContent = data[0].fact;
            section.appendChild(cajilla);
        }
    });
