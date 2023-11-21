process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });

  // Handling the end of input
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

// Listen for signals to handle program termination
process.on('SIGINT', () => {
  process.exit();
});

process.on('SIGTERM', () => {
  process.exit();
});
