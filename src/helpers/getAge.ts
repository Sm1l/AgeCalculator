//*возвращает только год рождения

export const getAge = (dateString: string) => {
  const today = new Date();

  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

//*format mm/dd/yyyy или yyyy-mm-dd

export const myAge = (date: string): { y: number; m: number; d: number } => {
  const now = new Date(),
    birthDate = new Date(date),
    diff = now.getTime() - birthDate.getTime(),
    y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
    m = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))),
    d = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24));
  return { y, m, d };
};
