module.exports = function clearConsole () {
  // This seems to work best on Windows and other systems.
  // The intention is to clear the output so the next message is focused on.
  process.stdout.write('\x1bc');
}
