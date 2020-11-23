function primeNumbers(n) {
  const array = [];

  for (let i = 2; array.length < n; i++) {
    let divisorFound = false;

    for (let count = 2; count < i; count++) {
      if (i % count === 0) {
        divisorFound = true;
        break;
      }
    }
    if (!divisorFound) { array.push(i); }
  }
  return array;
}

function mappingLettersToPrimes() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const primes = primeNumbers(letters.length);

  return { letters, primes }
}

function calculateWords(weightMapping, word) {
  const splittedWords = word.split('');
  let weight = 1;

  for (let i = 0; i < splittedWords.length; i++) {
    const letterIndex = weightMapping.letters.indexOf(splittedWords[i]);
    weight *= weightMapping.primes[letterIndex];
  }

  return weight;
}

/**
 * @params (array) words - array of word
 * @returns (array) - array of anagram groups
 */
function computeAnagram(words) {
  const letterWeight = mappingLettersToPrimes();
  const anagramResult = [];
  const anagramWeight = [];
  let anagramWords = words;

  // for (let i = 0; i < anagramWords.length; i++) {
  //   const weight = calculateWords(letterWeight, anagramWords[i]);

  //   if (anagramResult[weight.toString()] && anagramResult[weight.toString()].length  > 0) {
  //     anagramResult[weight.toString()].push(anagramWords[i]);
  //   } else {
  //     anagramResult[weight.toString()] = [anagramWords[i]];
  //   }
  // }

  for (let i = 0; i < anagramWords.length - 1; i++) {
    if (anagramWords[i]) {
      const anagramGroup = [anagramWords[i]];
      const firstWeight = calculateWords(letterWeight, anagramWords[i]);

      for (let j = i + 1; j < anagramWords.length; j++) {
        if (anagramWords[j]) {
          const nextWeight = calculateWords(letterWeight, anagramWords[j]);

          if (firstWeight === nextWeight) {
            anagramGroup.push(anagramWords[j]);
            delete anagramWords[j];
          }
        }
      }
      anagramResult.push(anagramGroup);
    }
  }

  return anagramResult;
}

const words = ['kita', 'atik', 'tika', 'aku', 'zmxncbv', 'kia', 'makan', 'mnbzxcv', 'kua'];
// console.log(mappingLettersToPrimes());
console.log(computeAnagram(words));
