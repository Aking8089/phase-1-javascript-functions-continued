function saturdayFun(activity="roller-skate"){
        return `This Saturday, I want to ${activity}!` 
    }
const mondayWork= function(job='go to the office'){
    return (`This Monday, I will ${job}.`) 
}
function wrapAdjective(outerParameter= `*`) {
    const innerFunction= function (thing=`special`){
        return `You are ${outerParameter}${thing}${outerParameter}!`;
    };
    return innerFunction;
}

wrapAdjective("%")("a dedicated programmer");



