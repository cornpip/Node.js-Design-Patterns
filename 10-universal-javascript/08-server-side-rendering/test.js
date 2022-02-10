import {resolve, dirname} from "path"
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const b = resolve(__dirname, '..', 'public');
console.log(b);