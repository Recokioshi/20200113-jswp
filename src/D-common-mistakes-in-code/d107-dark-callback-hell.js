/**

 # Zadanie
 Sprawdź wynik działania na konsoli.

 #Cel:
 Zrozumienie iż wywołania typu "callback" w praktyce nadają sie tylko do "Eventów".
 W pozostałych przypadkach powinniśmy korzystać ze spłaszczonej struktury: Promise.

*/



// Generalnie callback byłby super do operacji asynchronicznych

// Jednak jego zastosowanie trochę się komplikuje gdy mamy w kolejności kilka operacji do wykonania
// Przykładowo 2 operacja czeka na wykonanie 1 itd....

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