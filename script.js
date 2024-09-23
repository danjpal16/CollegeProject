const teamMembers = [
    {
        name: 'Frederick Winslow Taylor',
        DOB: 'March 20, 1856, Germantown, Philadelphia, PA',
        DOD: 'March 21, 1915 (age 59 years), Philadelphia, PA',
        Known: 'He invented the Taylor-White process for tempering steel, which revolutionized metal cutting techniques and earned multiple medals. He also invented a high-speed cutting tool that won awards at international expositions.',
        img: "fwt2.png",
    },
    {
        name: 'Marques Brownlee',
        DOB: '1993 (age 30 years), Maplewood, NJ',
        DOD: 'N/A',
        Known: 'Known professionally as MKBHD, is an American YouTuber and professional ultimate player, best known for his videos reviewing tech-devices.',
        img: "mb1.jpg",
    },
    {
        name: 'Igor Ansoff',
        DOB: 'December 12, 1918, Vladivostok, Russia',
        DOD: 'July 14, 2002 (age 83 years), San Diego, CA',
        Known: 'Harry Igor Ansoff was a Russian American applied mathematician and business manager. He is known as one of the fathers of strategic management.',
        img: "ia1.jpg",
    },
]

function generateTeamCards(){

    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-3')


        let backgroundColor

        switch(member.name.toLowerCase()) {
            case 'eric cartman':
                backgroundColor = "red"
                break;
            case 'stan marsh':
                backgroundColor = "navy"
                break;
            case 'kenny mccormick':
                backgroundColor = "orange"
                break;
            case 'kyle broflovski':
                backgroundColor = "greenyellow"
                break;
            case 'butters stotch':
                backgroundColor = "turquoise"
                break;
            case 'mr. mackey':
                backgroundColor = "gray"
                break;
            case 'mr. garrison':
                backgroundColor = "green"
                break;
            case 'chef':
                backgroundColor = "brown"
                break;
            case 'pc principal':
                backgroundColor = "darkblue"
                break;
            case 'randy marsh':
                backgroundColor = "darkcyan"
                break;
            
        }





        card.style.backgroundColor = backgroundColor







        card.innerHTML= `
            <div class="card p-2">
                <div class="card-header">
                ${member.name}
                </div>
                <div class="card-body">
                <img class="img-fluid" src="${member.img}">
                    <ul>
                        <li><strong>DOB:</strong> ${member.DOB}</li>
                        <li><strong>DOD:</strong> ${member.DOD}</li>
                        <li><strong>Known:</strong> ${member.Known}</li>
                    </ul>
                </div>
            </div>
    
        `
    teamCardsContainer.appendChild(card)
    });

}


window.onload = generateTeamCards()