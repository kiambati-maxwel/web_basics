export {runtest as default};

const runtest = a => {
return a % 2 === 0 ? console.log(`${a} even`) : console.log(`${a} is odd`);
}

async function main() {
  try {
    var quote = await getQuote();
    console.log(quote);
  } catch (error) {
    console.error(error);
  }
}