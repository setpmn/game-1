const x = [
    "2018_bmw.jpg",
    "2018_rolls_royce.jpg",
    "bmw_m5.jpg",
    "bmw_m8.jpg",
    "lamborghini_aventador.jpg",
    "lamborghini_terzo_millennio.jpg",
    "porsche_911_speedster.jpg",
    "prior_design_mercedes_amg.jpg",
    "renntech_mercedes_amg_gt.jpg",
    "rolls_royce_cullinan.jpg",
    "porsche_panamera.jpg",
    "yellow_lamborghini_murcielago.jpg",
];

let cat1 = [];
let cat2 = [];
let cat3 = [];
let cat4 = [];
let cat5 = [];

for (let i = 0; i < x.length; i++) {
    if (x[i].indexOf("bmw") > -1) {
        cat1.push(x[i]);
    }

    if (x[i].indexOf("rolls") > -1) {
        cat2.push(x[i]);
    }

    if (x[i].indexOf("lamborghini") > -1) {
        cat3.push(x[i]);
    }

    if (x[i].indexOf("mercedes") > -1) {
        cat4.push(x[i]);
    }

    if (x[i].indexOf("porsche") > -1) {
        cat5.push(x[i]);
    }
}

let _show = document.getElementById("gallery");

let _btn = document.querySelectorAll(".carNav>button");

_btn.forEach(function (val) {
    val.addEventListener("click", function () {
        let temp = this.innerText;

        _show.innerHTML = "";

        if (temp === "bmw") {
            _category(cat1);
        }
        if (temp === "rolls_royce") {
            _category(cat2);
        }
        if (temp === "lamborghini") {
            _category(cat3);
        }
        if (temp === "mercedes") {
            _category(cat4);
        }
        if (temp === "porsche") {
            _category(cat5);
        }
        if (temp === "all") {
            _category(x);
        }
    });
});

function _category(temp) {
    temp.map(function (value) {
        _show.innerHTML += `<img src="assets/img/${value}" class='col-4'>`;
    });
}
