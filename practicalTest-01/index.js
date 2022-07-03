const transportSelect = document.getElementById("transports"); 
const typeSelect = document.getElementById("type"); 
const roundTrip = document.getElementById("roundTrip"); 

const travelsTable = document.getElementById("travelsTable");
const table = document.getElementById("table");
const balance = document.getElementById("totalBalance"); 
const sendTravel = document.getElementById("sendTravel"); 

const totalTravels = document.getElementById("totalTravels"); 
const totalSpent = document.getElementById("totalSpent"); 

const airplaneOptions = ["Internacional", "Nacional"];
const busOptions = ["Interestadual", "Intermunicipal", "Municipal"];

let totalBalance = 20000;
let totalTravelsNumber = 0;
let totalSpentNumber = 0;

balance.innerHTML = `Saldo atual: ${totalBalance}`;

window.onload = function() {
  chooseTypeOptions();
};

function getTypeSelect(typeSelect){
  switch (typeSelect) {
    case "Internacional":
      return 5000;    
    case "Nacional":
      return 500;      
    case "Interestadual":
      return 150;      
    case "Intermunicipal":
      return 50;      
    case "Municipal":
      return 25;      
    default:
      return null;      
  }
}

function isBuyable(costPpoints){
  if (totalBalance - costPpoints < 0) {
    sendTravel.disabled = true;
    balance.style.color = "red";

    alert("Sem dinheiro meu chapa");
    return false;
  } else {
    sendTravel.disabled = false;
    balance.style.color = "black";
    return true;
  }
}

function transportsGlobalFunction(){
  chooseTypeOptions();
  isBuyable(getTypeSelect(typeSelect.value));
}

function roundTripGlobalFunction(){
  isBuyable(getTypeSelect(typeSelect.value));
}

function chooseTypeOptions(){
  const [options, oldOptions] = transportSelect.options[transportSelect.selectedIndex].value === "airplane" ?
  [airplaneOptions, busOptions] : [busOptions, airplaneOptions];

  for (let i = 0; i < oldOptions.length; i++) {
    typeSelect.remove(typeSelect.options[i]);
  }

  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    
    option.value = options[i];
    option.text =  options[i];

    typeSelect.add(option);
  }

  typeSelect.value 
}

function addTravel(){
  const data = new FormData();
  const tr = document.createElement("tr");

  table.style.display = "table";

  data.append("transports", transportSelect.value);
  data.append("typeSelect", typeSelect.value);
  data.append("roundTrip", roundTrip.checked);
  data.append("costPpoints", data.get("roundTrip") === "true" ? getTypeSelect(typeSelect.value) * 2 : getTypeSelect(typeSelect.value));    

  if (totalBalance === 0 ||  !isBuyable(data.get("costPpoints")) ) {
    sendTravel.disabled = true;
    balance.style.color = "red";
    alert("Sem dinheiro meu chapa");
    return;
  }

  totalTravelsNumber += 1;
  totalTravels.innerHTML = `Total de viajens: ${totalTravelsNumber}`;

  totalSpentNumber += Number(data.get("costPpoints"));
  totalSpent.innerHTML = `Pontos gastos: ${totalSpentNumber}`;

  totalBalance -= data.get("costPpoints");
  balance.innerHTML = `Saldo atual: ${totalBalance}`;

  for (var dataField of data.values()) {
    const td = document.createElement("td");
    let value;

    switch (dataField) {
      case "airplane":
        value =  "Avião";    
        break;
      case "bus":
        value = "Ônibus";    
        break;
      case "false":
        value =  "Não";   
        break;
      case "true":
        value =  "Sim";         
        break; 
      default:
        value = dataField;      
        break;
    }

    td.innerHTML =  value;
    tr.appendChild(td);
  }

  travelsTable.appendChild(tr);
}