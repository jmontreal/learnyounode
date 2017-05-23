var retSum = 0;

for (var i=2; i<process.argv.length; i++) {
  retSum += Number(process.argv[i]);
}

console.log(retSum);