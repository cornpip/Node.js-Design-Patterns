import { db } from './db.js'

// db.connect()

async function updateLastAccess () {
  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses"`)
}

updateLastAccess()

setTimeout(() => {
  updateLastAccess()
}, 1000)

setTimeout(() => {
  updateLastAccess()
}, 2000)

setTimeout(() => {
  db.connect();
}, 5000)
