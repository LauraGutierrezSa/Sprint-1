function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('async function called and resolved.');
      }, 2000);
    });
  }
  
async function callAsyncFunction() {
    console.log('hold on');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }

  module.exports = callAsyncFunction;