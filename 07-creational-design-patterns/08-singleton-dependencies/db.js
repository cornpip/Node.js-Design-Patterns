import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(import.meta);
export const db = new sqlite3.Database(
  join(__dirname, 'data.sqlite'))
