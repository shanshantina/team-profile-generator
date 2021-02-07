// generate the HTML
function generatePage(response) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron">
    <h1 class="text-center" >My Team</h1>
  </div>

  <main class='container'>
    <div class= "content-wrapper row"> 
        ${cards(response)}
    </div>
  </main>
</body>
</html>
`
};

// check which title cards to use
function cards(response) {
    return response
    .map(role => {
        let title = role.getRole();
        switch (title) {
            case 'Manager':
                return managerCard(role);
                break;
            case 'Engineer':
                return engineerCard(role);
                break;
            case 'Intern':
                return internCard(role);
                break;   
        }
    })
    .join("\n");
};

// create manager card
function managerCard(role) {
   let manager = `
    <div class = "col-sm-4 role">
       <div class="card" style="width: 19rem;">
          <div class="card-body">
             <h4 class="card-title">${role.name}<br /><br /><i class='fa fa-coffee'></i> ${role.getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${role.id}</li>
             <li class="list-group-item">Email: <a href="mailto:${role.email}" target="_blank">${role.email}</a></li>
             <li class="list-group-item">Office Number: ${role.officeNumber}</li>
          </ul>
       </div>
    </div>
 `
 return manager;
};

// create engineer card
function engineerCard(role) {
    let engineer = `
    <div class = "col-sm-4 role">
       <div class="card" style="width: 19rem;">
          <div class="card-body">
          <h4 class="card-title">${role.name}<br /><br /><i class='fa fa-cogs'></i> ${role.getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${role.id}</li>
             <li class="list-group-item">Email: <a href="mailto:${role.email}" target="_blank">${role.email}</a></li>
             <li class="list-group-item">Github: <a href="https://github.com/${role.github}" target="_blank">${role.github}</a></li>
          </ul>
       </div>
    </div>
 `
 return engineer;
};

// create intern card
function internCard(role) {
    let intern = `
    <div class = "col-sm-4 role">
       <div class="card" style="width: 19rem;">
          <div class="card-body">
          <h4 class="card-title">${role.name}<br /><br /><i class='fa fa-book'></i> ${role.getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${role.id}</li>
             <li class="list-group-item">Email: <a href="mailto:${role.email}" target="_blank">${role.email}</a></li>
             <li class="list-group-item">School: ${role.school}</li>
          </ul>
       </div>
    </div>
 `
 return intern;
};


module.exports = generatePage;