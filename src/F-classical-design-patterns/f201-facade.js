/**
 * Wzorzec: Facade | Fasada
 *
 * @_Zasada-działania:
 * Przygotowanie innej warstwy abstrakcji aby zasłonić
 * szczegóły implementacji - lub ją uprościć
 *
 * @_Przypadki-użycia:
 * Bardzo często wykorzystywany wzorzec, który pozwoli nam
 * odseparować pewną część logiki tak aby:
 * 1. Stała się ona bardziej re-używalna
 * 2. Zasłonić szczegóły jej implementacji - ponieważ np. są skomplikowane albo widzimy masę powtórzeń tego samego kodu
 *
 * */

// Zły kodzik:
document.addEventListener('.save-button', () =>  {
	const myUser = { name: 'Michal', lastName: 'Kowalski' };
	fetch('http://some.address', { method: 'POST', body: myUser })
});

document.addEventListener('.get-users-button', () =>  {
	fetch('http://some.address/users')
});

document.addEventListener('.get-users-button3', () =>  {
	fetch('http://some.address/users')
});

document.addEventListener('.get-other-users-button', () =>  {
	fetch('http://some.address/users/other')
		.then((users) => users.length)
});


// Fasada:
const userService = {
	mainUrl: 'http://some.address',
	addUser(user) {
		return fetch(this.mainUrl, { method: 'POST', body: user })
	},
	getUsers() {
		return fetch(`${this.mainUrl}/users`)
	},
	getOtherUsersCount() {
		return fetch(`${this.mainUrl}/users/other`)
			.then((users) => users.length)
	}
};

// Dobry kodzik:
document.addEventListener('.save-button', () =>  {
	const myUser = { name: 'Michal', lastName: 'Kowalski' };
	userService.addUser(myUser)
});

document.addEventListener('.get-users-button', () =>  {
	userService.getUsers()
});

document.addEventListener('.get-users-button3', () =>  {
	userService.getUsers()
});

document.addEventListener('.get-other-users-button', () =>  {
	userService.getOtherUsersCount()
});
