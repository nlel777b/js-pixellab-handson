//Ex 01/1+2+3+4+5+1+2+1+2+3
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${hours}: ${minutes}: ${seconds}: ${milliseconds}, am ajuns la Pixellab.`;
}
setInterval(function () {
  console.log(getTime());
}, 1000);
