function findUniqueVowel(string_) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCOUNT = {};
  [...string_].forEach((e) => {
    if (vowels.includes(e)) {
      if (vowelCOUNT[e]) {
        vowelCOUNT[e] = vowelCOUNT[e] + 1;
      } else {
        vowelCOUNT[e] = 1;
      }
    }
  });
  console.log(vowelCOUNT);
  return vowelCOUNT;
}

findUniqueVowel("krishna");
