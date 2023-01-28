export function getLastWeeksDate() {
  const now = new Date();

  return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
}
export function getLastMonth() {
  var x = new Date();
  x.setDate(1);
  return new Date(x.setMonth(x.getMonth() - 1));
}
export function getLastYear() {
  return new Date(new Date().setFullYear(new Date().getFullYear() - 1));
}
