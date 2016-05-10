var dict = ["Համազասպ Աստվածատրյան", "Գեներալ Ալոշ", "Մարուքե Դրաստամատյան", "Տելեֆոն Սեթո", "Սերգե Կասպառիչ", "Մեռելի Ենոք", "Բոչկա Նիկոլայ", "Բիթլիսցի Արշակ", "Օսեփ Նարիմանով", "Վասիլ", "Ղահվեճի Սեթո", "Հաջի Օնիկ Մանուկոֆ էֆենդին", "Կարո Դարայան", "Պետրոս (Պիեր)", "Նենեթ", "Լեսքյուր", "Զարեհ (Լոխում)", "Պանին", "Ավի", "Գևորգ Աբովյան", "Մեսրոպ Ղազարյան", "Այսել", "Լյովիկ և Ցիգ", "Նաելգատուտ", "Նաերեպրեպ", "Նաերուտսա", "Նախշի", "ընկ․ Վառոդյան", "Նշան Մառանկոզյան"];
var first = true;

$(window).keypress(function (e) {
	if (e.keyCode === 13) {
	    e.preventDefault();
		randomWord();
	}
})
function randomWord() {
	if (first === true) {
		var index = Math.floor(Math.random() * 5);
		first = false;
	}
	else {
		var index = Math.floor((Math.random() * dict.length));
	}
	$("#guessword").text(dict[index]);
};

function addDialog() {
	bootbox.prompt({
		title: "Մուքագրեք նոր անունը",
		callback: function(result) {                
		 	if (result !== "" && result !== null) {
				dict.push(result);
				console.log(dict);
			}
		}
	});
};
