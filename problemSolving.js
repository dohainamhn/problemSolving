const validate24HoursFormat = (value) => {
  return (
    value.split(":")[0] > 0 &&
    value.split(":")[0] < 24 &&
    value.split(":")[1] > 0 &&
    value.split(":")[1] < 60
  );
};
validate24HoursFormat("02:72");

const findMissingAddressNumber = (arr) => {
  const allAddressNumber = [];
  for (let i = 0; i < arr.length + 1; i++) {
    allAddressNumber.push(i);
  }
  return allAddressNumber.filter(
    (number) => arr.filter((item) => item === number).length < 1,
  );
};
console.log(findMissingAddressNumber([0, 1, 2]));
