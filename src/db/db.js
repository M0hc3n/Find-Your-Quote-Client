import Dexie from "dexie";

const db = new Dexie("Find-Your-Quote");

db.version(1).stores({
    quotes: "++id, question, response, date, category"
});

export default db;