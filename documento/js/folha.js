function containerOpen(){
   var container =  document.querySelector(".inputsContainer");
   var button = document.querySelector(".plus");
   var less = document.querySelector(".less");
   less.classList.toggle('active');
   button.classList.toggle('active');
   container.classList.toggle('active');
}
 const formData = document.querySelector(".formData");
 formData.onsubmit = (event)=>{
 event.preventDefalult();
}

//////////////////////// código
const inputCode = document.querySelector("#inputCode");
inputCode.onkeyup = ()=>{
data = inputCode.value;
place =  document.querySelector(".codigoRenavam");
place.innerHTML = data;
}

//////////////////////// placaInput
const placaInput = document.querySelector("#placaInput");
placaInput.onkeyup = ()=>{
data = placaInput.value;
place =  document.querySelector(".placaPlace");
place.innerHTML = data;
}
//////////////////////// "exercicio
const exercicio = document.querySelector("#exercicio");
exercicio.onkeyup = ()=>{
data = exercicio.value;
place =  document.querySelector(".exercicioPlace");
place.innerHTML = data;
}
//////////////////////// anoModelo
const anoModelo = document.querySelector("#anoModelo");
anoModelo.onkeyup = ()=>{
data = anoModelo.value;
place =  document.querySelector(".ano");
place.innerHTML = data;
}
//////////////////////// AnoFab
const AnoFab = document.querySelector("#AnoFab");
AnoFab.onkeyup = ()=>{
data = AnoFab.value;
place =  document.querySelector(".numeroDecrv");
place.innerHTML = data;
}

//////////////////////// AnoFab
const codDeseguran = document.querySelector("#codDeseguran");
codDeseguran.onkeyup = ()=>{
data = codDeseguran.value;
place =  document.querySelector(".codigoSeg");
place.innerHTML = data;
}
//////////////////////// AnoFab
const catInput = document.querySelector("#catInput");
catInput.onkeyup = ()=>{
data = catInput.value;
place =  document.querySelector(".cat");
place.innerHTML = data;
}
//////////////////////// marcaInput
const marcaInput = document.querySelector("#marcaInput");
marcaInput.onkeyup = ()=>{
data = marcaInput.value;
place =  document.querySelector(".marca");
place.innerHTML = data;
}

//////////////////////// especieInput 
const especieInput = document.querySelector("#especieInput");
especieInput.onkeyup = ()=>{
data = especieInput.value;
place =  document.querySelector(".especie");
place.innerHTML = data;
}
////////////////////////  placaAnterior
const placaAnterior = document.querySelector("#placaAnterior");
placaAnterior.onkeyup = ()=>{
data = placaAnterior.value;
place =  document.querySelector(".PlacaAnt");
place.innerHTML = data;
}
////////////////////////  chassi chassiInput
const chassiInput = document.querySelector("#chassiInput");
chassiInput.onkeyup = ()=>{
data = chassiInput.value;
place =  document.querySelector(".chassi");
place.innerHTML = data;
}
////////////////////////  cor
const corinput = document.querySelector("#corinput");
corinput.onkeyup = ()=>{
data = corinput.value;
place =  document.querySelector("#corPredomin");
place.innerHTML = data;
}
////////////////////////  combustivel
const combustivelInput = document.querySelector("#combustivelInput");
combustivelInput.onkeyup = ()=>{
data = combustivelInput.value;
place =  document.querySelector(".combustivel");
place.innerHTML = data;
}
////////////////////////  OBS...
const obsInput = document.querySelector("#obsInput");
obsInput.onkeyup = ()=>{
data = obsInput.value;
place =  document.querySelector(".obs");
place.innerHTML = data;
}

////////////////////////  categoria...
const categoriaInput = document.querySelector("#categoriaInput");
categoriaInput.onkeyup = ()=>{
data = categoriaInput.value;
place =  document.querySelector(".Categoria");
place.innerHTML = data;
}
////////////////////////  capacidade...
const capacidadeInput = document.querySelector("#capacidadeInput");
capacidadeInput.onkeyup = ()=>{
data = capacidadeInput.value;
place =  document.querySelector(".capacidade");
place.innerHTML = data;
}

////////////////////////  potenciaInput....
const potenciaInput = document.querySelector("#potenciaInput");
potenciaInput.onkeyup = ()=>{
data = potenciaInput.value;
place =  document.querySelector(".Potencia");
place.innerHTML = data;
}

////////////////////////  Experiência,,
const experienciaInput = document.querySelector("#experienciaInput");
experienciaInput.onkeyup = ()=>{
data = experienciaInput.value;
place =  document.querySelector(".experiencia");
place.innerHTML = data;
}


////////////////////////  motorInput
const motorInput= document.querySelector("#motorInput");
motorInput.onkeyup = ()=>{
data = motorInput.value;
place =  document.querySelector(".motor");
place.innerHTML = data;
}

////////////////////////  Cmt...
const cmtInput = document.querySelector("#cmtInput");
cmtInput.onkeyup = ()=>{
data = cmtInput.value;
place =  document.querySelector(".cmt");
place.innerHTML = data;
}
////////////////////////  Csixo,...
const eixoInput = document.querySelector("#eixoInput");
eixoInput.onkeyup = ()=>{
data = eixoInput.value;
place =  document.querySelector(".eixo");
place.innerHTML = data;
}
////////////////////////  Lotação

const lotacaoInput = document.querySelector("#lotacaoInput");
lotacaoInput.onkeyup = ()=>{
data = lotacaoInput.value;
place =  document.querySelector(".lotacao");
place.innerHTML = data;
}


//////////////////////// carroceriaInput

const carroceriaInput= document.querySelector("#carroceriaInput");
carroceriaInput.onkeyup = ()=>{
data = carroceriaInput.value;
place =  document.querySelector(".carroceira");
place.innerHTML = data;
}

//////////////////////// momeInput

const momeInput = document.querySelector("#momeInput");
momeInput.onkeyup = ()=>{
data = momeInput.value;
place =  document.querySelector(".nomeEspace");
place.innerHTML = data;
}
//////////////////////// localInput

const localInput = document.querySelector("#localInput");
localInput.onkeyup = ()=>{
data = localInput.value;
place =  document.querySelector(".localEspace");
place.innerHTML = data;
}

////////////////////////localWedInput

const localWedInput = document.querySelector("#localWedInput");
localWedInput.onkeyup = ()=>{
data = localWedInput.value;
place =  document.querySelector(".local");
place.innerHTML = data;
}

////////////////////////----dataInputLOCAL
const dataInputLOCAL = document.querySelector("#dataInputLOCAL");
dataInputLOCAL.onkeyup = ()=>{
data = dataInputLOCAL.value;
place =  document.querySelector(".date");
place.innerHTML = data;
}