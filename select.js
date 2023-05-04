const floors = Array.from({length: 25}, (_, i) => i + 3);

const floor = document.getElementsByClassName("floor")[0];

const p = document.createElement("p");
p.innerText = "Выберите этаж";

const select = document.createElement("select");
select.name = "floor";
select.classList.add("selector");

const option = document.createElement("option")
option.disabled = true;
option.selected = true;
select.appendChild(option);

floors.forEach((el) => {
    const option = document.createElement("option");
    option.value = el;
    option.innerText = el;

    select.appendChild(option);
});

floor.appendChild(p);
floor.appendChild(select);