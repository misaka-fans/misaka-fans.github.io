get()
function get()
{
  fetch("https://api.github.com/repos/misaka-fans/misaka-fans.github.io").then(response => response.json()).then(json => setstar(json))
}
function setstar(s)
{
  document.getElementById("stars").innerText=s['stargazers_count'];
  setfork(s);
}
function setfork(s)
{
  document.getElementById("forks").innerText=s['forks'];
}
