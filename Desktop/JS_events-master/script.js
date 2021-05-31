/*Fonctionnalité 1*/
let footer = document.querySelector("footer");

function posterOnTheConsole()
{
    console.log("clique");
}

footer.addEventListener("click",posterOnTheConsole);

/* Fonctionnalité 1bis */
let footerbis = document.querySelector("footer");
let counter = 1;

function posterOnTheConsoleBis()
{
    console.log(`clique ${counter}`);
    counter++;
}

footerbis.addEventListener("click",posterOnTheConsoleBis);

/* Fonctionnalité 2 */
let hamburgerMenu = document.getElementById("navbarHeader");
let btn = document.querySelector(".navbar-toggler-icon");

function openOrCloseMenu() 
{
    hamburgerMenu.classList.toggle("collapse");
}

btn.addEventListener("click", openOrCloseMenu);

/* Fonctionnalité 3*/
const card = document.querySelectorAll('div.col-md-4')[0]; 
const editCard1 = document.querySelector('div.col-md-4 button.btn-outline-secondary'); 
editCard1.addEventListener('click', function() {     
  card.style.color = "red";
});

/* Fonctionalité 4*/
function greenText() {
    editCardButtonTwo = document.querySelectorAll("div.col-md-4")[1]
    textCardTwo = document.querySelectorAll("div.col-md-4 button.btn-outline-secondary")[1]
    i = 1
    editCardButtonTwo.addEventListener("click", function() {
        i++
    if (textCardTwo.style.color === "green")
    {
      textCardTwo.style.color = "";
    }
    else
    {
      textCardTwo.style.color = "green";
    }
    })
}
greenText()

/* Fonctionnalité 5*/
function nuclearPage() {
	navbar = document.querySelector("header")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if( i % 2 == 0) {
			bootstrap.setAttribute("href", "#")
		} else {
			bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		}
	})
}

nuclearPage()

