var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.Tracker("assets/3ds_games.wtc", {
			onLoaded: this.worldLoaded
		});
		
		this.imgButton = new AR.ImageResource("assets/buyButton.png");

		var imgPokemon = new AR.ImageResource("assets/pokemonDesc.png");
		var overlayPokemon = new AR.ImageDrawable(imgPokemon, 0.5, {
			offsetX: 0.0,
			offsetY: 0.0
		});
		
		var pagePokemonButton = this.createWwwButton("http://www.amazon.com/Legend-Zelda-Between-Worlds-nintendo-3ds/dp/B00GANWVJE/ref=sr_1_1?ie=UTF8&qid=1417906973&sr=8-1&keywords=zelda+link+between+worlds", 0.5, {
			offsetX: 0,
			offsetY: 0,
			zOrder: 1
		});

		var pagePokemon = new AR.Trackable2DObject(this.tracker, "pokemonx", {
			drawables: {
				cam: [overlayPokemon, pagePokemonButton]
			}
		});

		var imgSmash = new AR.ImageResource("assets/smashDesc.png");
		var overlaySmash = new AR.ImageDrawable(imgSmash, 0.5, {
			offsetX: 0.0,
			offsetY: 0.0
		});

		var pageSmash = new AR.Trackable2DObject(this.tracker, "smash3ds", {
			drawables: {
				cam: overlaySmash
			}
		});
		
		var imgZelda = new AR.ImageResource("assets/zeldaDesc.png");
		var overlayZelda = new AR.ImageDrawable(imgZelda, 0.5, {
			offsetX: 0.0,
			offsetY: 0.0
		});

		var pageZelda = new AR.Trackable2DObject(this.tracker, "zeldalinkbetweenworlds", {
			drawables: {
				cam: overlayZelda
			}
		});
	},

	createWwwButton: function createWwwButtonFn(url, size, options) {
		/*
			As the button should be clickable the onClick trigger is defined in the options passed to the AR.ImageDrawable. In general each drawable can be made clickable by defining its onClick trigger. The function assigned to the click trigger calls AR.context.openInBrowser with the specified URL, which opens the URL in the browser.
		*/
		options.onClick = function() {
			AR.context.openInBrowser(url);
		};
		return new AR.ImageDrawable(this.imgButton, size, options);
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivSurfer = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 38px'";
		var cssDivBiker = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px;'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivInstructions + ">Scan Target &#35;1 (surfer) or &#35;2 (biker):</div>" +
			"<div" + cssDivSurfer + "><img src='assets/surfer.png'></img></div>" +
			"<div" + cssDivBiker + "><img src='assets/bike.png'></img></div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);
	}
};

World.init();
