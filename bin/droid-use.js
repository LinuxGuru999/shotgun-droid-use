#!/usr/bin/env node
// droid-use - Local ADB and Shizuku shell toolkit for Android
const fs = require('fs'), crypto = require('crypto');
const [, , cmd, ...args] = process.argv;
const commands = ["status","connect","restart","deploy"];
function help() {
  console.log('droid-use\n\nCommands: ' + commands.join(', '));
  console.log('\nRun: node droid-use.js <command> [args]');
}
function formatJson() {
  const raw = args[0] ? fs.readFileSync(args[0], 'utf8') : fs.readFileSync(0, 'utf8');
  try { console.log(JSON.stringify(JSON.parse(raw), null, 2)); }
  catch (e) { console.error('Invalid JSON: ' + e.message); process.exit(1); }
}
function base64() {
  const mode = args[0] || 'enc', text = args.slice(1).join(' ');
  console.log(mode === 'dec' ? Buffer.from(text, 'base64').toString('utf8') : Buffer.from(text).toString('base64'));
}
function uuid() { const n = Number(args[0]) || 1; for (let i = 0; i < n; i++) console.log(crypto.randomUUID()); }
function regexTest() {
  const re = new RegExp(args[0] || '', args[1] || ''), text = args.slice(2).join(' ');
  console.log('matches:', (text.match(re) || []).length);
}
function logClean() {
  const file = args[0], drop = new RegExp(args[1] || 'DEBUG|TRACE', 'i');
  const src = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(0, 'utf8');
  process.stdout.write(src.split('\n').filter(l => l && !drop.test(l)).join('\n') + '\n');
}
switch (cmd) {
  case 'json': formatJson(); break;
  case 'base64': base64(); break;
  case 'uuid': uuid(); break;
  case 'regex': regexTest(); break;
  case 'log-clean': logClean(); break;
  case 'setup': case 'doctor': case 'status': case 'connect': case 'restart': case 'deploy':
    console.log('droid-use: ' + cmd + ' — see README.md for platform-specific instructions.'); break;
  case 'env': console.log(JSON.stringify({ platform: process.platform, arch: process.arch, node: process.version }, null, 2)); break;
  default: help();
}
