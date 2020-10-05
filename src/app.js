const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id = id+1;
        this.name = name;
        this.strength = this.getRandomStrength();
        this.image = `images/super-${this.id}.png`;
        this.type= type;
    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
    let html = '';
    const div = document.createElement("div");
    div.className = "player";
    div.setAttribute("data-id", this.id + 1);  

    html += `<img src="`+ this.image+`">`; 
    html += `<div class="name">`+this.name+`</div>`;
    console.log(this.strength)
    html +=  `<div class="strength">`+this.strength+`</div>`;
    div.innerHTML = html;
        return div;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
    // Create a field players 
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((player,id) => {
        console.log(id);
        let type = id%2==0?'hero':'villain';
        return new Player(id,player,type);

            // name: player,
            // image: "images/super-" + (id) + ".png",
            // strength: getRandomStrength(),
0    });
    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}