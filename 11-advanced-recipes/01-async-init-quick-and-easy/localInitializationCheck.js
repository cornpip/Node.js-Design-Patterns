import { once } from 'events'
import { db } from './db.js'

// db.connect()

async function updateLastAccess (a) {
  if (!db.connected) {
    await once(db, 'connected')
  }

  await db.query(`INSERT (${Date.now()}) INTO "LastAccesses" ====>${a}`)
}

updateLastAccess('first')
setTimeout(() => {
  db.connect();
  updateLastAccess('second')
}, 3000)
