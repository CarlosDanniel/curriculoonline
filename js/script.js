function abrir() {
	if(document.querySelector('.desc').classList.contains('mostrar')) {
		document.querySelector('.desc').classList.remove('mostrar');
	}else {
		document.querySelector('.desc').classList.add('mostrar');
	}
}
function abrir_() {
	if(document.querySelector('#abrir').classList.contains('mostrar')) {
		document.querySelector('#abrir').classList.remove('mostrar');
	}else {
		document.querySelector('#abrir').classList.add('mostrar');
	}
}
function abrir__() {
	if(document.querySelector('#abrir_').classList.contains('mostrar')) {
		document.querySelector('#abrir_').classList.remove('mostrar');
	}else {
		document.querySelector('#abrir_').classList.add('mostrar');
	}
}
function abrir___() {
	if(document.querySelector('#abrir__').classList.contains('mostrar')) {
		document.querySelector('#abrir__').classList.remove('mostrar');
	}else {
		document.querySelector('#abrir__').classList.add('mostrar');
	}
}
function abrira() {
	if(document.querySelector('#abrira').classList.contains('mostrar')) {
		document.querySelector('#abrira').classList.remove('mostrar');
		document.querySelector('#removeb').classList.remove('remove');
		document.querySelector('#removec').classList.remove('remove');
	}else {
		document.querySelector('#abrira').classList.add('mostrar');
		document.querySelector('#removeb').classList.add('remove');
		document.querySelector('#removec').classList.add('remove');
	}
}
function abrirb() {
	if(document.querySelector('#abrirb').classList.contains('mostrar')) {
		document.querySelector('#abrirb').classList.remove('mostrar');
		document.querySelector('#removea').classList.remove('remove');
		document.querySelector('#removec').classList.remove('remove');
	}else {
		document.querySelector('#abrirb').classList.add('mostrar');
		document.querySelector('#removec').classList.add('remove');
		document.querySelector('#removea').classList.add('remove');
	}
}
function abrirc() {
	if(document.querySelector('#abrirc').classList.contains('mostrar')) {
		document.querySelector('#abrirc').classList.remove('mostrar');
		document.querySelector('#removea').classList.remove('remove');
		document.querySelector('#removeb').classList.remove('remove');
	}else {
		document.querySelector('#abrirc').classList.add('mostrar');
		document.querySelector('#removeb').classList.add('remove');
		document.querySelector('#removea').classList.add('remove');
	}
}