const searchInput = document.querySelector("#szukaj");
const res = [...document.querySelectorAll(".all")];
const portfolio = document.querySelector(".portfolio");

const searchWord = e => {
	const currentWord = e.target.value.toLowerCase();
	let resoult = res;
	resoult = resoult.filter(res => res.textContent.toLowerCase().includes(currentWord));
	portfolio.textContent = '';
	resoult.forEach(name => portfolio.appendChild(name));
}

searchInput.addEventListener('input', searchWord);