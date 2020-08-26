/* 

*/

const indexedDb = window.indexedDB;

if (indexedDb) {
  let db;
  let request = indexedDb.open("listatarea", 1);

  request.onsuccess = () => {
    db = request.result;
    console.log("Open DB");
  };

  request.onupgradeneeded = () => {
    db = request.result;
    const objectStore = db.createObjectStore("lista");
    console.log("Create DB");
  };

  request.onerror = (e) => {
    console.log("Error...", e);
  };
}
