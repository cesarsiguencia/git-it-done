// var getUserRepos = function() {
//     console.log("function was called");
//     fetch("https://api.github.com/users/octocat/repos").then(function(response){
//         response.json().then(function(data){
//             console.log(data);
//         })

//     });
    
//   };
  

// getUserRepos();


var getUserRepos = function(octocat) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + octocat + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

  getUserRepos("octocat");