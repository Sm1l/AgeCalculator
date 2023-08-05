// var age = calculateDate("02/24/1991", "02/24/2010");
//!разобраться

export const getAge = (dateString: string) => {
  const today = new Date();

  const birthDate = new Date(dateString);
  // console.log("birthDate:", birthDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  console.log("age:", age);

  let m = today.getMonth() - birthDate.getMonth();
  console.log("m:", m);

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
//*format mm/dd/yyyy
