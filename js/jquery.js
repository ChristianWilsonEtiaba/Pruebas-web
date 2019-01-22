$(document).ready(function () {
	$("button:first-of-type").click(function (event) {
		if ($("header").css("visibility") === "hidden") {
			$("header").css("visibility", "visible");


		} else {
			$("header").css("visibility", "hidden");
		}
	})

	$("button:nth-of-type(2)").click(function (event) {
		if ($("nav").css("visibility") === "hidden") {
			$("nav").css("visibility", "visible");
			$("main").css("visibility", "visible");
		} else {
			$("nav").css("visibility", "hidden");
			if ($("section").css("visibility") === "hidden") {
				$("main").css("visibility", "hidden");
			}
		}
	})

	$("button:nth-of-type(3)").click(function (event) {
		if ($("section").css("visibility") === "hidden") {
			$("main").css("visibility", "visible");
			$("section").css("visibility", "visible");
			$("aside").css("visibility", "visible");

		} else {
			$("section").css("visibility", "hidden");
			$("aside").css("visibility", "hidden");
			if ($("nav").css("visibility") === "hidden") {
				$("main").css("visibility", "hidden");

			}
		}

	})

	$("button:nth-of-type(4)").click(function (event) {
		$("button").css("display", "none");
		$("footer > div > h3").css("display", "inline");
		//NO ME SALE. LO HE PROBADO DE VARIAS MANERAS Y NADA DE NADA :(
		//Quitar de manera gradual
		$("button:nth-of-type(2)").delay("slow", 0.9).fadeOut();
		$("button:nth-of-type(3)").delay("slow", 0.5).fadeOut();
		$("button:nth-of-type(4)").delay("slow", 0.1).fadeOut();
		//Mostrar de manera gradual
		$("button:first-of-type").delay("slow", 0.1).fadeIn();
		$("button:nth-of-type(2)").delay("slow", 0.3).fadeIn();
		$("button:nth-of-type(4)").delay("slow", 0.6).fadeIn();
		$("button:nth-of-type(6)").delay("slow", 0.9).fadeIn();
	})

	$("footer > div > h3").click(function (event) {
		$("button").css("display", "inline");
		$("footer > div > h3").css("display", "none");
	})
});
