/**

 # Zadanie
 Zobacz jak zmieni się przykład z c105-dark-callback-hell jeśli zastosujemy Promise API.
 Przepisz na Promise API.

 #Cel:
 Promise API jest super alternatywą dla klasycznych "callbacków".
 Wszędzie tam gdzie chcemy wykonać operację w kilku krokach a mamy zrobić to asynchronicznie,
 warto użyć Promise.

 */

const dbUsers = [
  {id: 19, name: 'Janusz', lastname: 'Kos'},
  {id: 1, name: 'Michal', lastname: 'Kowalski', photos: [{id: 1, src: '/user/michal_face.jpg'}]},
  {id: 3, name: 'Michal', lastname: 'Ko'},
];
const dbAPI = {

  getUsersByName: function(name, callback) {
    const found = dbUsers.find(usr => usr.name === name);
    callback(found || []);
  },
  getUserPhotos: function(userId, callback) {
    const found = dbUsers.find(usr => usr.id === userId);
    callback(found && found.photos ? found.photos : []);
  },
  getPhotoSrc: function(photo, callback) {

    callback(photo.src || '')
  }
};

// Zjawisko "callback hell" wygląda następująco:
dbAPI.getUsersByName('Michal', (user) => {
  const userId = user.id;
  dbAPI.getUserPhotos(userId, (photoList) => {
    const firstPhoto = photoList[0] || {};
    dbAPI.getPhotoSrc(firstPhoto, (src) => {
      console.log(src);
    });
  })
});

