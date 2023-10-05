function sideBar() {
	document.querySelector(".hamburger").addEventListener("click", () => {
		document.querySelector(".nav-menu").classList.toggle("translate-x-80");
	});

	window.onclick = (event) => {
		if (
			(!(event.target as HTMLElement).matches(".hamburger") &&
				!(event.target as HTMLElement).matches(".hamburger span") &&
				!(event.target as HTMLElement).matches(".nav-menu") &&
				!(event.target as HTMLElement).matches(".nav-menu a")) ||
			(event.target as HTMLElement).matches(".opacity-0")
		) {
			document.querySelector(".nav-menu").classList.add("translate-x-80");
		}
	};
}

document.addEventListener("astro:page-load", sideBar);
