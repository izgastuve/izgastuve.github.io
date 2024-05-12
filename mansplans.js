



mans_plans = []

function ej(){
for (let i = 1; i < 8; i++) {
  diena = document.getElementById(i + "dien")
  mans_plans.push(diena.value)
}
  localStorage.setItem("pudele",JSON.stringify(mans_plans))
}

function darit(){
set_plan(JSON.parse(localStorage.getItem('pudele')))
}

function set_plan(list){
  for (let i = 1; i < 8; i++) {
    diena = document.getElementById(i + "dien")
    diena.value = list[i-1]
  }
  
}
function stiprs(){
   pirmdiena = "Iesildīšanās: 5-10 minūtes kardio (skriešana, braukšana ar riteni, lecamaukla utt), Bicepa treniņš - 60 min, Lielais krūšu muskulis - 30 min"
  otrdiena = "Atpūta"
  tresdiena = "Iesildīšanās, Plecu muskuļi - 26 min, Triceps - 10 min"
  ceturtdiena  = "Iesildīšanās, biceps - 40 min, plecu muskuļi - 40 min "
  piektdiena = "Atpūta"
  sestdiena = "Bicpes - 50 min, triceps - 30 min"
  svetdiena = "Atpūta"
  set_plan([pirmdiena, otrdiena , tresdiena, ceturtdiena, piektdiena, sestdiena, svetdiena])
  
}

function skriet(){
  pirmdiena = "Iesildīšanās: 5-10 minūtes kardio (skriešana, braukšana ar riteni, lecamaukla utt), Augšstilba muskulis: 60 min, krūšu muskulis: 30 min"
  otrdiena = "5km skrējiens"
  tresdiena = "Atpūta"
  ceturtdiena = "Iesildīšanās: 5-10 minūtes kardio, Augšstilba muskulis: 40 min, Ikru muskulis: 40 min"
  piektdiena = "Ātpūta"
  sestdiena =  "5km skrējiens"
  svetdiena = "Ātpūta"
  set_plan([pirmdiena, otrdiena , tresdiena, ceturtdiena, piektdiena, sestdiena, svetdiena])
  
}