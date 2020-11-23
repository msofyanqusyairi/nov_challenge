function findFirstStringInBracket(str){
  if(str.length > 0){
      let indexFirstBracketFound = str.indexOf("(");
      if(indexFirstBracketFound >= 0){
       let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
       if(wordsAfterFirstBracket){
          wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
          let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
          if(indexClosingBracketFound >= 0){
            return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
          }
          else{
            return '';
          }
       }else{
          return '';
       }
     }else{
       return '';
     }
  }else{
     return '';
  }
}

function new_findFirstStringInBracket(str) {
  const splitedWord = str.split('');
  const indexFirstBracketFound = str.indexOf('(');
  let firstStrInBracket = '';
  
  if(indexFirstBracketFound >= 0){
    const indexClosingBracketFound = str.indexOf(')');

    for (let i = indexFirstBracketFound + 1; i < indexClosingBracketFound; i++) {
      firstStrInBracket += splitedWord[i];
    }
  }

  return firstStrInBracket;
}

const str = 'lorem ips (um) (12345)';

console.log(findFirstStringInBracket(str));
console.log(new_findFirstStringInBracket(str));