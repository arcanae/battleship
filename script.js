let t1cells = document.querySelectorAll(".td1");

console.log(t1cells);

for (let value of t1cells) {
    value.addEventListener("click", function() {
        this.style.backgroundColor = 'rgba(255,0,0,0.7)';
    });
}