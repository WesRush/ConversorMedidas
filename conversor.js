let valor = parseFloat(prompt("Digite um valor em metros:"))

let medida = prompt(`Escolha a opção para converter ${valor}M
a. milímetro (mm)
b. centímetro (cm)
c. decímetro (dm)
d. decâmetro (dam)
e. hectômetro (hm)
f. quilômetro (km)`)

switch(medida){
    case "a": 
    alert(`${valor}M em milímetros é de ${valor*1000}mm`)
    break
    case "b": 
    alert(`${valor}M em centímetros é de ${valor*100}cm`)
    break
    case "c": 
    alert(`${valor}M em decímetros é de ${valor*10}dm`)
    break
    case "d": 
    alert(`${valor}M em decâmetro é de ${valor/10}dam`)
    break
    case "e": 
    alert(`${valor}M em hectômetro é de ${valor/100}hm`)
    break
    case "f": 
    alert(`${valor}M em quilômetro é de ${valor/1000}km`)
    break
    default:
    alert("Entradas incorretas... finalizando!")
}