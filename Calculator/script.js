var buttons = document.getElementsByClassName('button');
const display = document.getElementById('display');

for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', clicked.bind(event, buttons[i].value));
    console.log(buttons[i].value)
}

var expression = display.value;
display.addEventListener('keyup', (event) => {
    if(event.keyCode == 13){
        evaluate();
    }
    else{
        expression=display.value
    }
});
var flag = false;

function clicked(val){
    if(val == 'C'){
        flag = false;
        expression = "";
    }
    else if(val == '<-'){
        if(expression[expression.length-1] == ')'){
            flag = true;
        }
        if(expression[expression.length-1] == '('){
            flag = false;
        }

        expression = expression.slice(0, expression.length-1);
    }
    else if(val == '()'){
        if(flag){
            expression += ')';
            flag = false;
        }
        else{
            expression += '(';
            flag = true;
        }
    }
    else if(val == '='){
        evaluate();
        flag = false;
    }
    else{
        expression += val;
    }
    display.value = expression;
}
function evaluate(){
    try{
        expression = eval(expression).toString();
    }
    catch(e){
        expression = 'Error';
    }
    display.value = expression;
}