const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


window.addEventListener('load', (event) => {
    const breedList = document.getElementById("dog-breeds");

    function fetchBreeds() {
        return fetch(breedUrl).then(resp => resp.json()).then(function(json) {
            for (let key in json.message) {
                const dogBreed = document.createElement("li");
                dogBreed.innerText = key;
    
                dogBreed.addEventListener("click", function() {
                    this.style.color = "red";
                })
                breedList.appendChild(dogBreed);
            }
        });
    }

    fetchBreeds()

    fetch(imgUrl).then(resp => resp.json()).then(function(json) {
        const dogContainer = document.getElementById("dog-image-container");
        for (let i = 0; i < json.message.length; i++) {
            const dogImg = document.createElement("img");
            dogImg.setAttribute("src", json.message[i]);
            dogContainer.appendChild(dogImg);
        }
    })


    const breedSelection = document.getElementById("breed-dropdown")
    breedSelection.addEventListener('change', (event) => {
        for (i = 0; i < breedList.children.length; i++) {
            breedList.children[i].style.display = "";
            if (breedList.children[i].innerText[0] !== event.target.value) {
                breedList.children[i].style.display = "none";
            }
        }
    });

});



