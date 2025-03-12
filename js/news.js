// # News Page JS Code

const likeButton = document.querySelectorAll(".likeButton");
const articleUpdate = document.querySelectorAll(".like-update");

const likeCount = {
    articles: [2,4,5,3,6]
}

articleUpdate.forEach((art) => {
    if (art.id == 'like-one') {
        art.innerHTML = `${likeCount.articles[0]}`;
    }
    if (art.id == 'like-two') {
        art.innerHTML = `${likeCount.articles[1]}`;
    }
    if (art.id == 'like-three') {
        art.innerHTML = `${likeCount.articles[2]}`;
    }
    if (art.id == 'like-four') {
        art.innerHTML = `${likeCount.articles[3]}`;
    }
    if (art.id == 'like-five') {
        art.innerHTML = `${likeCount.articles[4]}`;
    }
})

likeButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.id == "art-one") {
            likeCount.articles[0] = likeCount.articles[0] + 1;
            console.log(likeCount.articles[0])
            event.target.parentElement.children[1].innerHTML = `${likeCount.articles[0]}`;
        }
        else if (event.target.id == "art-two") {
            likeCount.articles[1] = likeCount.articles[1] + 1;
            console.log(likeCount.articles[1])
            event.target.parentElement.children[1].innerHTML = `${likeCount.articles[1]}`;
        }
        else if (event.target.id == "art-three") {
            likeCount.articles[2] = likeCount.articles[2] + 1;
            console.log(likeCount.articles[2])
            event.target.parentElement.children[1].innerHTML = `${likeCount.articles[2]}`;
        }
        else if (event.target.id == "art-four") {
            likeCount.articles[3] = likeCount.articles[3] + 1;
            console.log(likeCount.articles[3])
            event.target.parentElement.children[1].innerHTML = `${likeCount.articles[3]}`;
        }
        else if (event.target.id == "art-five") {
            likeCount.articles[4] = likeCount.articles[4] + 1;
            console.log(likeCount.articles[4])
            event.target.parentElement.children[1].innerHTML = `${likeCount.articles[4]}`;
        }
    })
})



