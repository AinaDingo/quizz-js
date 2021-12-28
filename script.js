const form = document.querySelector('.form-quizz');
let tableauResults = [];
const responses= ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResult = document.querySelector('.resultats h2');
const noteResult = document.querySelector('.note');
const aideResult = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i=1; i<6; i++){
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    verifFunc(tableauResults);
    tableauResults = [];
})

function verifFunc(tabResults){
    for(a=0; a<5; a++){
        if(tabResults[a] === responses[a]){
            verifTableau.push(true)
        }else{
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResults(verifTableau);
    couleursFonction(verifTableau)
    verifTableau= [];
}

function afficherResults(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDeFautes);

    switch(nbDeFautes){
        case 0:
            titreResult.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResult.innerText = ''
            noteResult.innerText = '5/5'
            break;
        case 1:
            titreResult.innerText = `✨ Vous y êtes presque ! ✨`
            aideResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResult.innerText = '4/5'
            break;
        case 2:
            titreResult.innerText = `✨ Encore un effort ... 👀`
            aideResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResult.innerText = '3/5'
            break;
        case 3:
            titreResult.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResult.innerText = '2/5'
            break;
        case 4:
            titreResult.innerText = `😭 Peux mieux faire ! 😭`
            aideResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResult.innerText = '1/5'
            break;
        case 5:
            titreResult.innerText = `👎 Peux mieux faire ! 👎`
            aideResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResult.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';
    }
}

function couleursFonction(tabBalBool){
    for(j=0; j<tabBalBool.length; j++){
        if(tabBalBool[j]=== true){
            toutesLesQuestions[j].style.background= 'lightgreen';
        }else {
            toutesLesQuestions[j].style.background= '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() =>{
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item =>{
    item.addEventListener('click', () =>{
        item.style.background= 'white';
    })
})²