let t1cells = document.querySelectorAll(".td1");

function clickCell() {
    this.style.backgroundColor = 'rgba(255,0,0,0.7)';
    this.removeEventListener("click", clickCell);
    placeBoat(this.id);
}


let boats = [];
let boatsnum = 5;

function placeBoat(id) {
    boats.push(id);
    console.log(boats);
    boatsnum--;
    document.querySelector("#boatsnum").textContent = 'Bateaux restants : ' + boatsnum;
    if (boatsnum === 0) {
        for (let value of t1cells) {
            value.removeEventListener("click", clickCell);
        }
    }
}

for (let value of t1cells) {
    value.addEventListener("click", clickCell);
}