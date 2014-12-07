var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.Tracker("assets/3dsGamesAR.wtc", {
			onLoaded: this.worldLoaded
		});
		
		this.imgButton = new AR.ImageResource("assets/buyButton.png");
		this.imgButton2 = new AR.ImageResource("assets/gamestopButton.png");

		var imgPokemonX = new AR.ImageResource("assets/pokemonXDesc.png");
		var overlayPokemonX = new AR.ImageDrawable(imgPokemonX, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pagePokemonXButton = this.createWwwButton("http://www.amazon.com/Pok%C3%A9mon-X-nintendo-3ds/dp/B0053B5RGI/ref=sr_1_1?ie=UTF8&qid=1417906826&sr=8-1&keywords=pokemon+x", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pagePokemonXButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/pokemon-x/107641", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pagePokemonX = new AR.Trackable2DObject(this.tracker, "pokemonx", {
			drawables: {
				cam: [overlayPokemonX, pagePokemonXButton, pagePokemonXButtonGS]
			}
		});
		
		var imgPokemonY = new AR.ImageResource("assets/pokemonYDesc.png");
		var overlayPokemonY = new AR.ImageDrawable(imgPokemonY, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pagePokemonYButton = this.createWwwButton("http://www.amazon.com/Pok%C3%A9mon-Y-nintendo-3ds/dp/B0053B66KE/ref=pd_sim_vg_4?ie=UTF8&refRID=0Z25NVVH7HRDW5Q0FHGD", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pagePokemonYButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/pokemon-y/107642", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pagePokemonY = new AR.Trackable2DObject(this.tracker, "pokemony", {
			drawables: {
				cam: [overlayPokemonY, pagePokemonYButton, pagePokemonYButtonGS]
			}
		});

		var imgSmash = new AR.ImageResource("assets/smashDesc.png");
		var overlaySmash = new AR.ImageDrawable(imgSmash, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageSmashButton = this.createWwwButton("http://www.amazon.com/Super-Smash-Bros-Nintendo-3DS/dp/B00DD0B1R0/ref=sr_1_1?ie=UTF8&qid=1417899632&sr=8-1&keywords=smash+3ds", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageSmashButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/super-smash-bros/114503", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageSmash = new AR.Trackable2DObject(this.tracker, "smash3ds", {
			drawables: {
				cam: [overlaySmash, pageSmashButton, pageSmashButtonGS]
			}
		});
		
		var imgZeldaLBW = new AR.ImageResource("assets/zeldaLBWDesc.png");
		var overlayZeldaLBW = new AR.ImageDrawable(imgZeldaLBW, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageZeldaButtonLBW = this.createWwwButton("http://www.amazon.com/Legend-Zelda-Between-Worlds-nintendo-3ds/dp/B00GANWVJE/ref=sr_1_1?ie=UTF8&qid=1417906033&sr=8-1&keywords=zelda+link+between+worlds", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageZeldaButtonLBWGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/the-legend-of-zelda-a-link-between-worlds/110062", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageZeldaLBW = new AR.Trackable2DObject(this.tracker, "zeldalinkbetweenworlds", {
			drawables: {
				cam: [overlayZeldaLBW, pageZeldaButtonLBW, pageZeldaButtonLBWGS]
			}
		});
		
		var imgZeldaOOT = new AR.ImageResource("assets/zeldaOOTDesc.png");
		var overlayZeldaOOT = new AR.ImageDrawable(imgZeldaOOT, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageZeldaButtonOOT = this.createWwwButton("http://www.amazon.com/The-Legend-Zelda-Ocarina-Nintendo-3DS/dp/B003O6E800/ref=pd_sim_vg_18?ie=UTF8&refRID=1KYZNCDT945QTJ1GM0M3", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageZeldaButtonOOTGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/the-legend-of-zelda-ocarina-of-time-3ds/89884", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageZeldaOOT = new AR.Trackable2DObject(this.tracker, "zeldaoot3ds", {
			drawables: {
				cam: [overlayZeldaOOT, pageZeldaButtonOOT, pageZeldaButtonOOTGS]
			}
		});
		
		var imgMarioKart = new AR.ImageResource("assets/mariokart7Desc.png");
		var overlayMarioKart = new AR.ImageDrawable(imgMarioKart, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageMarioKartButton = this.createWwwButton("http://www.amazon.com/Mario-Kart-7-Nintendo-3DS/dp/B0053BCO00/ref=pd_sim_vg_17?ie=UTF8&refRID=0VB9AJ5XN60CKHEY8DDH", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageMarioKartButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/mario-kart-7/89891", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageMarioKart = new AR.Trackable2DObject(this.tracker, "mariokart7", {
			drawables: {
				cam: [overlayMarioKart, pageMarioKartButton, pageMarioKartButtonGS]
			}
		});
		
		var imgPokemonAS = new AR.ImageResource("assets/pokemonASDesc.png");
		var overlayPokemonAS = new AR.ImageDrawable(imgPokemonAS, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pagePokemonASButton = this.createWwwButton("http://www.amazon.com/Pok%C3%A9mon-Alpha-Sapphire-Nintendo-3DS/dp/B00K848IH0/ref=pd_sim_vg_4?ie=UTF8&refRID=12T3ZWPR9GFNNNSFBWFY", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pagePokemonASButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/pokemon-alpha-sapphire/114995", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pagePokemonAS = new AR.Trackable2DObject(this.tracker, "pokemonalphasapphire", {
			drawables: {
				cam: [overlayPokemonAS, pagePokemonASButton, pagePokemonASButtonGS]
			}
		});
		
		var imgPokemonOR = new AR.ImageResource("assets/pokemonORDesc.png");
		var overlayPokemonOR = new AR.ImageDrawable(imgPokemonOR, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pagePokemonORButton = this.createWwwButton("http://www.amazon.com/Pok%C3%A9mon-Omega-Ruby-Nintendo-3DS/dp/B00KI2OZ9M/ref=pd_bxgy_vg_img_y", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pagePokemonORButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/pokemon-omega-ruby/114994", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pagePokemonOR = new AR.Trackable2DObject(this.tracker, "pokemonomegaruby", {
			drawables: {
				cam: [overlayPokemonOR, pagePokemonORButton, pagePokemonORButtonGS]
			}
		});
		
		var imgYoshiNI = new AR.ImageResource("assets/yoshiNIDesc.png");
		var overlayYoshiNI = new AR.ImageDrawable(imgYoshiNI, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageYoshiNIButton = this.createWwwButton("http://www.amazon.com/Yoshis-New-Island-Nintendo-3DS/dp/B00DC7G3Q8/ref=pd_sim_vg_1?ie=UTF8&refRID=05PH1KD3W3PPRTN90CWM", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageYoshiNIButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/yoshis-new-island/110061", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageYoshiNI = new AR.Trackable2DObject(this.tracker, "yoshisnewisland", {
			drawables: {
				cam: [overlayYoshiNI, pageYoshiNIButton, pageYoshiNIButtonGS]
			}
		});
		
		var imgAnimalCrossing = new AR.ImageResource("assets/animalcrossingNLDesc.png");
		var overlayAnimalCrossing = new AR.ImageDrawable(imgAnimalCrossing, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageAnimalCrossingButton = this.createWwwButton("http://www.amazon.com/Animal-Crossing-New-Leaf-Nintendo-3DS/dp/B0053BCML6/ref=pd_sim_vg_10?ie=UTF8&refRID=1AASF766DPWWK5NR7A6X", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageAnimalCrossingButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/animal-crossing-new-leaf/89903", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageAnimalCrossing = new AR.Trackable2DObject(this.tracker, "animalcrossing", {
			drawables: {
				cam: [overlayAnimalCrossing, pageAnimalCrossingButton, pageAnimalCrossingButtonGS]
			}
		});
		
		var imgCookingMama = new AR.ImageResource("assets/cookingmama5Desc.png");
		var overlayCookingMama = new AR.ImageDrawable(imgCookingMama, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageCookingMamaButton = this.createWwwButton("http://www.amazon.com/Cooking-Mama-Appetit-Nintendo-Standard-Edition/dp/B00J7YV72K/ref=pd_sim_vg_19?ie=UTF8&refRID=1W2SY3CFZ24R7YH4QDEA", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageCookingMamaButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/cooking-mama-5-bon-appetit/115094", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});

		var pageCookingMama = new AR.Trackable2DObject(this.tracker, "cookingmama5", {
			drawables: {
				cam: [overlayCookingMama, pageCookingMamaButton, pageCookingMamaButtonGS]
			}
		});
		
		var imgKirbyTD = new AR.ImageResource("assets/kirbyTDDesc.png");
		var overlayKirbyTD = new AR.ImageDrawable(imgKirbyTD, 0.5, {
			offsetX: 0.5,
			offsetY: 0.5
		});
		
		var pageKirbyTDButton = this.createWwwButton("http://www.amazon.com/Kirby-Triple-Deluxe-Nintendo-3DS/dp/B00I5LMSE2/ref=pd_sim_vg_34?ie=UTF8&refRID=1BZBRNWAMGXGJRS0WQ7B", 0.5, {
			offsetX: 0.5,
			offsetY: 0.0,
			zOrder: 1
		});
		
		var pageKirbyTDButtonGS = this.createWwwButton2("http://www.gamestop.com/nintendo-3ds/games/kirby-triple-deluxe/113815", 0.5, {
			offsetX: 0.5,
			offsetY: -0.5,
			zOrder: 1
		});
		

		var pageKirbyTD = new AR.Trackable2DObject(this.tracker, "kirbytd", {
			drawables: {
				cam: [overlayKirbyTD, pageKirbyTDButton, pageKirbyTDButtonGS]
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
	
	createWwwButton2: function createWwwButtonFn(url, size, options) {
		/*
			As the button should be clickable the onClick trigger is defined in the options passed to the AR.ImageDrawable. In general each drawable can be made clickable by defining its onClick trigger. The function assigned to the click trigger calls AR.context.openInBrowser with the specified URL, which opens the URL in the browser.
		*/
		options.onClick = function() {
			AR.context.openInBrowser(url);
		};
		return new AR.ImageDrawable(this.imgButton2, size, options);
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivSurfer = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 38px'";
		var cssDivBiker = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px;'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivInstructions + ">Scan Target &#35;1 (surfer) or &#35;2 (biker):</div>" +
			"<div" + cssDivSurfer + "><img src='assets/surfer.png'></img></div>" +
			"<div" + cssDivBiker + "><img src='assets/bike.png'></img></div>";

		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 1);
	}
};

World.init();
