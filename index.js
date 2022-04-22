// code your solution here
function saturdayFun (string= "roller-skate"){
    return `This Saturday, I want to ${string}!`
}
console.log (saturdayFun())

const mondayWork= function(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`
}
console.log (mondayWork())

function wrapAdjective (string="*"){
    return function(vari="special"){
        return `You are ${string}${vari}${string}!`
    }
    
}
const encouragingPromptFunction = wrapAdjective("!!!")