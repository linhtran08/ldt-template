const intoView = (function () {
	const init = function () {
		createObserver();
	};

	const createObserver = function () {
		let options = {
			root: null,
			rootMargin: "100px",
			threshold: 0.5
		};

		let observer = new IntersectionObserver(
			function (entries, observer) {
				handleIntersect(entries, observer);
			},
			options);

		let targetElements = document.querySelectorAll(".track_view");

		targetElements.forEach((targetElement) => {
			observer.observe(targetElement);
		});
	};

	const handleIntersect = function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active_view");
			}else {
				entry.target.classList.remove("active_view")
			}
		});
	};

	return {
		init: init
	};
})();

intoView.init();
