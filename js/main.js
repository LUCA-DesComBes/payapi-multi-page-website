const iconMenuBurger = document.getElementById("burger");
const closeBtn = document.querySelector(".close-menu-burger");
const divMenuBurger = document.querySelector(".div-menu-burger");
const divMenuBurgerFond = document.querySelector(".div-menu-burger-fond");

iconMenuBurger.addEventListener("click", () => {
	divMenuBurger.style.display = "block";
	divMenuBurgerFond.style.display = "block";
	divMenuBurger.style.transform = "translateX(0%)";
	divMenuBurgerFond.style.transform = "translateX(0%)";
});

closeBtn.addEventListener("click", () => {
	divMenuBurger.style.display = "none";
	divMenuBurgerFond.style.display = "none";
	divMenuBurger.style.transform = "translateX(-100%)";
	divMenuBurgerFond.style.transform = "translateX(0%)";
});
