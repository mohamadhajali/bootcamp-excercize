const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.addUser("mohamad");
usersModule.addUser("ali");
usersModule.listUsers();

/***************************
 * 
 * Exercise 1
Create a StringFormatter module. It should have two functions:
capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
skewerCase - receives a string and replaces any spaces with a dash
 * 
 * 
 * 
 */
const StringFormatter = function () {
  const capitalizeFirst = function (word) {
    return (
      word.charAt(0).toUpperCase() +
      word.charAt(1).toLowerCase() +
      word.slice(2, word.length)
    );
  };

  const skewerCase = function (word) {
    return word.replace(" ", "-");
  };
  return {
    cap: capitalizeFirst,
    ske: skewerCase,
  };
};
const formatter = StringFormatter();

console.log(formatter.cap("dorothy"));

console.log(formatter.ske("blue box"));

/*
Exercise 2
Create a Bank module. It should have a variable and two functions:
A private money variable which starts off at 
A depositCash function which takes a cash parameter and uses it to increase money
A checkBalance function which logs the money
*/
const Bank = function () {
  window.mony = 500;
  const depositCash = function (num) {
    return (window.mony = window.mony + num);
  };

  const showBalance = function () {
    console.log(window.mony);
  };
  return {
    deposit: depositCash,
    showbalance: showBalance,
  };
};
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showbalance();
/*
Exercise 3
SongsManager

*/

const SongsManager = function () {
  songs = {};
  arraySongs = [];
  const addSongs = function (name, url) {
    songs.name = name;
    songs.url = url;
    arraySongs.push({ songs: { name: name, url: url } });
  };
  const getSongs = function (nameSong) {
    for (song of arraySongs) {
      if (song.songs.name == nameSong) {
        console.log(song.songs.url);
      }
    }
  };
  return {
    addsong: addSongs,
    getsongs: getSongs,
  };
};
const songsmanager = SongsManager();
songsmanager.addsong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsmanager.addsong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsmanager.addsong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");
songsmanager.getsongs("how long");
