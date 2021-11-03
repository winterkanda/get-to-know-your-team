// define the function of generateHTML

function generateHTML(data) {

    const cards = data.map( (emp) => {

        const details = emp.role==="Manager" 
        ? `Office Number: ${emp.officeNum}` : emp.role==="Engineer" 
        ? `Github: ${emp.github}` : 
        `School: ${emp.school}`; 

        const icon = emp.role==="Manager" 
        ? "fas fa-mug-hot" : emp.role==="Engineer" 
        ? "fas fa-glasses" : 
        "fas fa-user-graduate"; 

        return `<div class="card">
        <div class="top-of-card">
            <h1>${emp.name}</h1>
            <h2><i class=${icon}></i> ${emp.role} </h2>
        </div>

        <div class="bottom-of-card">

            <div class="details-card">
                <p>ID: ${emp.id} </p>
                <p>Email: ${emp.email}</p>
                <p>${details}</p>
            </div>

        </div>
    </div>`
    })

    console.log(cards);

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get To Know Your Team</title>

        <link rel= "stylesheet" href="style.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
      <header> My Team </header>
    
      <div class="container">
        ${cards.join("")}
      </div>

    </body>

    </html>`
}

module.exports= generateHTML;