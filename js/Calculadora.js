var CurrentNumber = '', PrevNumber = '', Operator = '';
var NumberButtons = document.querySelectorAll(".number")
var OperatorButtons = document.querySelectorAll(".operation")
var Display = document.querySelector(".screen")
var AC = document.querySelector(".clear")
var Delete = document.querySelector(".del")
var Equal = document.querySelector(".equal")

//Função para atualizar o que aparece na tela
function ScreenShow (FristNumberToShow, Operator, LastNumberToShow){ 
    Display.textContent = FristNumberToShow + " " + Operator + " " + LastNumberToShow
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
        case "^":
            FinalResult = Math.pow(PrevNumber, CurrentNumber)
        break
    }
    
    //Trava para o usuario não selecionar um operador sem ter selecionado todos os numeros
    if(PrevNumber === "" || CurrentNumber === "") {
        ScreenShow("", "", "")
        return AllClear()
    }

    ScreenShow(FinalResult.toFixed(2),"","")
    console.log("A conta de " + PrevNumber + Operator + CurrentNumber + " é igual: " + FinalResult)
    PrevNumber = ""
    CurrentNumber = parseFloat(FinalResult)
    Operator = ""
}

//Função del (apaga o ultimo caractere)
function Del(){
    
    if(PrevNumber === "" && CurrentNumber != ""){
        CurrentNumber = CurrentNumber.substring(0, CurrentNumber.length - 1 )
    }
    if(CurrentNumber != "" && Operator != ""){
         CurrentNumber = CurrentNumber.substring(0, CurrentNumber.length - 1 )
    }
    else if ( CurrentNumber.length === 0 && Operator != ""){
         Operator = ""
         CurrentNumber = PrevNumber;
         PrevNumber = ""
     }
     return ScreenShow(PrevNumber ,Operator , CurrentNumber)
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

//Fazer o Calculo
Equal.addEventListener('click', () =>{
    Calculation();
})

//Limpar Numeros
AC.addEventListener('click', () =>{
    AllClear()
})

//Deletar o ultimo caractere
Delete.addEventListener('click', () => {
    Del();
})