const prom = new Promise((resolve, reject) => {
  resolve('ok');
});

prom
  .then((result) => result)
  .then((result) => {
    throw new Error('error1');
  })
  .catch((err) => {
    console.log('err0', err);
    throw new Error('error2');
  })
  .then((x) => console.log('x', x))
  .catch((err) => console.log('err1rs', err));
