
let height=document.getElementById('height');
let weight=document.getElementById('weight');
let result=document.getElementById("result");

function bmicalculate()
{
    let h=new Number(height.value);
    let w=new Number(weight.value);
let bmi=(w/(h*h));
if(bmi<18.5)
{
    result.innerHTML=` your BMI is <span> ${bmi} </span> and you are <b>underweight</b> !`
}
    else if(bmi>=18.5 && bmi<=24.9)
{
    result.innerHTML=` your BMI is <span> ${bmi} </span> and you are <b>Healthy</b> !`
}
 else{
     result.innerHTML=` your BMI is <span> ${bmi} </span> and you are <b>Overweight</b> !`
}
 }
