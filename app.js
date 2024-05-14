// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const ourteam = [{
    name : 'Wayne Barnett ',
    role : 'Founder & CEO ',
    photo: 'wayne-barnett-founder-ceo.jpg '
}, {
    name : 'Angela Caroll ',
    role : 'Chief Editor ',
    photo: 'angela-caroll-chief-editor.jpg '
}, {
    name : 'Walter Gordon ',
    role : 'Office Manager ',
    photo: 'walter-gordon-office-manager.jpg '
}, {
    name : 'Angela Lopez ',
    role : 'Social Media Manager ',
    photo: 'angela-lopez-social-media-manager.jpg '
    
}, {
    name : 'Scott Estrada ',
    role : 'Developer ',
    photo: 'scott-estrada-developer.jpg '
}, {
    name : 'Barbara Ramos ',
    role : 'Graphic Designer ',
    photo: 'barbara-ramos-graphic-designer.jpg '
}];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for(let i = 0; i < ourteam.length; i++){
    //     console.log(ourteam[i].name);
    //     console.log(ourteam[i].role);
    //     console.log(ourteam[i].photo);
    // }
    
    
    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    // BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva
    // BONUS 2:
    // Organizzare i singoli membri in card/schede
    
    for(let i = 0; i < ourteam.length; i++){
        
        const lista = document.querySelector('.lista');
        
        const teamObj = ourteam[i]
        
        //create elements
    const li = document.createElement('li');
    const div = document.createElement('div');

    // variabili per creare elementi html
    const name = document.createElement('h2')
    const role = document.createElement('h2')
    const photo = document.createElement('img')

    // aggiunzioni classi 
    div.classList.add('card')

    // img in pagina
    photo.src = teamObj.photo;
    
    
    //
    name.append(teamObj.name);
    role.append(teamObj.role);
    photo.append(teamObj.photo);

    div.append(photo, name, role)
    li.append(div);
    lista.append(li)
}


