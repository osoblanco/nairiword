var dict = ["Համազասպ Աստվածատրյան", "Գեներալ Ալոշ", "Մարուքե Դրաստամատյան", "Տելեֆոն Սեթո", "Սերգե Կասպառիչ", "Կարո Դարայանը", "Մեռելի Ենոք", "Բոչկա Նիկոլայ", "Բիթլիսցի Արշակն", "Օսեփ Նարիմանովը", "Վասիլ", "Ղահվեճի", "Հաջի Օնիկ Մանուկոֆ էֆենդին", "Կարո Դարայան", "Պետրոս (Պիեր)", "Նենեթ", "Լեսքյուր", "Զարեհ (Լոխում)", "Պանին", "Ավի", "Գևորգ Աբովյան", "Մեսրոպ Ղազարյան", "Այսել", "Լյովիկ և Ցիգ", "Ղուշբաս Ռաֆո"];

function randomWord() {
	var index = Math.floor((Math.random() * dict.length));
	document.getElementById("guessword").innerHTML = dict[index];
}
