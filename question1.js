function find(arr) {
  const frequencyMap = {};

  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element] = frequencyMap[element] + 1;
    } else {
      frequencyMap[element] = 1;
    }
  });
  console.log(frequencyMap);
  return frequencyMap;
}

find(["hello", "world", "hello", "india", "world"]);
