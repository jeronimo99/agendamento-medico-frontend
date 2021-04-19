export const sortArray = (array) => {
  const newArray = [...array];

  const compare = (a, b) => {
    if (
      parseInt(getTheTwoFirstLetters(a.appointment)) <
      parseInt(getTheTwoFirstLetters(b.appointment))
    ) {
      return -1;
    }
    if (
      parseInt(getTheTwoFirstLetters(a.appointment)) >
      parseInt(getTheTwoFirstLetters(b.appointment))
    ) {
      return 1;
    }
    return 0;
  };

  newArray.sort(compare);
  return newArray;
};

const getTheTwoFirstLetters = (string) => {
  const newString = string.charAt(0) + string.charAt(1);
  return newString;
};
