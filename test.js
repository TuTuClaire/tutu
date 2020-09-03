const fetch =  require('fetch');
fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => response.json())
  .then(data => {
    // data就是我们请求的repos
    console.log(data)
    console.log("ata")
});