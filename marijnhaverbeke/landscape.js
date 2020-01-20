let landscape = function(){
    let result = ''
    let flat = function(s){
        for(let c = 0; c < s; c++)
        result += '_'
    }
    let mountain = function(s){
        result += '/'
        for(let c = 0; c < s; c++)
            result += "'"
        result += '\\'
    
    }




flat(3)
mountain(4)
flat(6)
mountain(1)
flat(1)
return result
} 
console.log(landscape())
