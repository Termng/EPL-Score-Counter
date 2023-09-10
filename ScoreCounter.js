let Cgoals = 0
let Mgoals = 0


let Cscore = document.getElementById('ChelseaDisplay')
let Mscore = document.getElementById('UnitedDisplay')
let saveValue = document.getElementById('displaySave')


function AddChelsea(){
    Cgoals += 1 
    let ChelText = Cscore
    ChelText.textContent = 'Chelsea: ' +  Cgoals 
    
   
}

function AddUnited(){
    Mgoals += 1 
    let UnitedText = Mscore
    UnitedText.textContent = 'Manchester United: ' +  Mgoals  
}

function save() {
    let saveText = Cgoals + ' - ' + Mgoals + ' || ' 
    saveValue.textContent += saveText
    Cscore.textContent = 0
    Mscore.textContent = 0
    Cgoals = 0
    Mgoals = 0

}
