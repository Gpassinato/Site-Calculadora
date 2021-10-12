var CurrentNumber = '', PrevNumber = '', Operator = '';
var NumberButtons = document.querySelectorAll(".number")
var OperatorButtons = document.querySelectorAll(".operation")
var Screen = document.querySelector(".screen")
var AC = document.querySelector(".clear")
var Equal = document.querySelector(".equal")

//Função para atualizar o que aparece na tela
function ScreenShow (FristNumberToShow, Operator, LastNumberToShow){ 
    Screen.textContent = FristNumberToShow + " " + Operator + " " + LastNumberToShow
    }

//Função para Limpar tudo
function AllClear (){
    CurrentNumber = ''
    PrevNumber = ''
    Operator = ''
    ScreenShow(PrevNumber , Operator, CurrentNumber)
}

//Função de calculo
function Calculation(){
var FinalResult = ""
    switch(Operator) {
    case "+":
        FinalResult = parseFloat(PrevNumber) + parseFloat(CurrentNumber)
    break
    case "-":
        FinalResult = parseFloat(PrevNumber) - parseFloat(CurrentNumber)
    break
    case "x":
        FinalResult = parseFloat(PrevNumber) * parseFloat(CurrentNumber)
    break
    case "÷":
        FinalResult = parseFloat(PrevNumber) / parseFloat(CurrentNumber)
    break
    }
    
    //Trava para o usuario não selecionar um operador sem ter selecionado todos os numeros
    if(PrevNumber === "" || CurrentNumber === "") {
        ScreenShow("", "", "")
        return AllClear()
    }

    ScreenShow(FinalResult,"","")
    console.log("A conta de " + PrevNumber + Operator + CurrentNumber + " é igual: " + CurrentNumber)
    PrevNumber = ""
    CurrentNumber = parseFloat(FinalResult)
    Operator = ""
}

//Seleção dos numeros
NumberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.innerHTML === '.' && CurrentNumber.includes('.'))return CurrentNumber
        CurrentNumber = CurrentNumber + button.innerHTML
        console.log("O numero selecionado é: " + CurrentNumber)
        ScreenShow(PrevNumber ,Operator , CurrentNumber)
    })
});

//Seleção das Operaçoes
OperatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
                if(Operator === ""){
                Operator = button.innerHTML
                PrevNumber = CurrentNumber
                CurrentNumber = ""}
                if(PrevNumber === ""){
                    Operator = ""
                    return
                } 
                
       ScreenShow(PrevNumber, Operator, CurrentNumber)
       console.log("O operador selecionado é: " + Operator)
    })
})

//Calculo
Equal.addEventListener('click', () =>{
    Calculation();
})

//Limpar Numeros
AC.addEventListener('click', () =>{
    AllClear()
})
