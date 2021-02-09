const helloTimeout = '4311o th3r3 w0r1d';
  setTimeout(() => {
    console.log(helloTimeout);
  }, 3000);

  // split(' '), 

  const helloTimeout2 = '311o th3r3 w0r1d'.split(' ');
  for (const word of helloTimeout2) {
    setTimeout(() => {
      console.log(word);
    }, 1000);
  }

  



