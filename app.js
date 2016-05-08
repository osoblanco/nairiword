var dict = ["Համազասպ Աստվածատրյան", "Գեներալ Ալոշ", "Մարուքե Դրաստամատյան", "Տելեֆոն Սեթո", "Սերգե Կասպառիչ", "Մեռելի Ենոք", "Բոչկա Նիկոլայ", "Բիթլիսցի Արշակ", "Օսեփ Նարիմանով", "Վասիլ", "Ղահվեճի", "Հաջի Օնիկ Մանուկոֆ էֆենդին", "Կարո Դարայան", "Պետրոս (Պիեր)", "Նենեթ", "Լեսքյուր", "Զարեհ (Լոխում)", "Պանին", "Ավի", "Գևորգ Աբովյան", "Մեսրոպ Ղազարյան", "Այսել", "Լյովիկ և Ցիգ", "Ղուշբաս Ռաֆո", "Նաելգատուտ", "Նաերեպրեպ", "Նաերուտսա", "Նախշի"];

$(window).keypress(function (e) {
	if (e.keyCode === 13) {
	    e.preventDefault();
		randomWord();
	}
})
function randomWord() {
	var index = Math.floor((Math.random() * dict.length));
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
