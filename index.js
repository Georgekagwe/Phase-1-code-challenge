const ramenpics = [
    {
        src: "Images/kojiro.jpg",
        name: "Kojiro Ramen",
        restaurant: "Ramen Heaven",
        rating: 5.5,
        comment: "A nutrient-rich delicacy."
    },
    {
        src: "Images/gyukotsu.jpg",
        name: "Gyukotsu Ramen",
        restaurant: "Ramen z House",
        rating: 8,
        comment: "A broth that will excite your taste buds."
    },
    {
        src: "Images/naruto.jpg",
        name: "Naruto Ramen",
        restaurant: "Ninjago Ramen",
        rating: 6,
        comment: "Wow."
    },
    {
        src: "Images/nirvana.jpg",
        name: "Nirvana Ramen",
        restaurant: "Huluu Ramen",
        rating: 5.0,
        comment: "Perfectly capable of being dined with other meaty foods."
    },
    {
        src: "Images/shoyu.jpg",
        name: "Shoyu Ramen",
        restaurant: "Ichiran",
        rating: 5,
        comment: "Simply Delicious!"
    }
];

function displayRamens() {
    const ramenmenu = document.getElementById("ramenmenu");

    ramenpics.forEach(function (ramen) {
        const img = document.createElement("img");
        img.src = ramen.src;
        img.alt = "ramen dish";
        img.style.width = "135px";
        img.style.height = "auto";
        img.style.marginRight = "10px";

        // Add click event listener to show ramen details
        img.onclick = function () {
            handleClick(ramen);
        };

        ramenmenu.style.display = "flex";
        ramenmenu.style.justifyContent = "center";
        ramenmenu.style.flexWrap = "wrap";
        ramenmenu.style.gap = "30px";
        ramenmenu.style.paddingTop = "30px";

        ramenmenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById("ramen-detail");

    
    ramenDetail.innerHTML = '';

    
    const ramenInfo = document.createElement("div");

    ramenInfo.innerHTML = `
        <h2>${ramen.name}</h2>
        <p><strong>Restaurant:</strong> ${ramen.restaurant}</p>
        <p><strong>Rating:</strong> ${ramen.rating} / 10</p>
        <p><strong>Comment:</strong> ${ramen.comment}</p>
    `;

    ramenDetail.appendChild(ramenInfo);
}


let header = document.getElementById("header");
header.style.backgroundColor = "black";
header.style.color = "white";
header.style.fontSize = "30px";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.flexWrap = "wrap";


displayRamens();





function addSubmitListener() {
    const form = document.querySelector('#ramen-form');
    const ramenMenu = document.querySelector('#ramen-menu');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const ramenImageUrl = document.querySelector('#ramen-image-url').value;

        

        const newRamenImage = document.createElement('img');
        newRamenImage.src = ramenImageUrl;
        newRamenImage.alt = 'New ramen'; 

     
        ramenMenu.appendChild(newRamenImage);

        document.querySelector('#ramen-image-url').value = '';
    });
}


addSubmitListener();

