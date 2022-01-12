/* In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/




const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


//SELEZIONI

const containerElement = document.querySelector('div.team-card')
const button = document.getElementById('addMemberButton')





// ciclare all'interno dell'array

for (let i = 0; i < team.length; i++) {
  const obj = team[i];
  // console.log(obj);
// selezionare la card per cambiare i valori
const template = `
<div class="card-image">
  <img src="img/${obj.image}"/>
</div>
<div class="card-text">
  <h3 class="name">${obj.name}</h3>
  <p class="role">${obj.role}</p>
</div>
` 
containerElement.innerHTML += template

}




  // selezione degli elementi
  const namex = document.getElementById('name')
  const role = document.getElementById('role')
  const image = document.getElementById('image')


//alla pressione del Add bisogna inserire i  nuovi dati

button.addEventListener('click', function () {
  // alert('funziona')


  //assegnazione del valore alle variabili
  const newName = namex.value
  const newRole = role.value
  const newImage = image.value

  // creare l'oggetto da pushare
  const obj = {
    name: newName,
    role: newRole,
    image: newImage,
  }

 team.push(obj)

 
  const template = `
  <div class="card-image">
    <img src="img/${obj.image}"/>
  </div>
  <div class="card-text">
    <h3 class="name">${obj.name}</h3>
    <p class="role">${obj.role}</p>
  </div>
  ` 
  containerElement.innerHTML += template


})

