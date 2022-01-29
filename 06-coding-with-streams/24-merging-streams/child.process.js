import { spawn } from 'child_process';
// const ls = spawn('node', ['stdout.js']);
// const ls = spawn('node', ['--version']);
const ls = spawn('git', ['--version']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});