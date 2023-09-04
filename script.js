const birthYear = prompt('Введіть ваш рік народження')
const residence = prompt('Введіть місто в якому ви живете')
const kindOfSport = prompt('Введіть ваш улюблений вид спорту')

if (birthYear === null || birthYear.trim() === '') {
	alert(`Шкода, що Ви не захотіли ввести свою дату народження`)
} else if (residence === null || residence.trim() === '') {
	alert(`Шкода, що Ви не захотіли ввести своє місто в якому ви живете`)
} else if (kindOfSport === null || kindOfSport.trim() === '') {
	alert(`Шкода, що Ви не захотіли ввести ваш улюблений вид спорту`)
} else {
	const resultBirthYear = `Ваш рік народження: ${birthYear}`;

	let resultResidence = '';
	switch (residence.toLowerCase()) {
		case 'київ': resultResidence = 'Ти живеш у столиці України';
			break;
		case 'вашингтон': resultResidence = 'Ти живеш у столиці США';
			break;
		case 'лондон': resultResidence = 'Ти живеш у столиці Англії';
			break;
		default: resultResidence = `Ти живеш у місті ${residence}`
			break
	}

	let resultKindOfSport = '';
	switch (kindOfSport.toLowerCase()) {
		case 'футбол': resultKindOfSport = 'Круто! Хочеш стати Ліонелем Мессі?';
			break;
		case 'баскетбол': resultKindOfSport = 'Круто! Хочеш стати Ігорем Зайцевим?';
			break;
		case 'бокс': resultKindOfSport = 'Круто! Хочеш стати Віталієм Кличко?';
			break;
		default: resultKindOfSport = `Круто! ${kindOfSport} гарний спорт`;
			break;
	}

	let result = `${resultBirthYear}\n${resultResidence}\n${resultKindOfSport}`

	alert(result)
}