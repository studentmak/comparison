import { convertExcelDooglysToJson } from "./parsers.js";
import { convertExcelTildaToJson } from "./parsers.js";
import colors  from "colors"

let dataDooglys = convertExcelDooglysToJson()
let dataTilda = convertExcelTildaToJson()


function comparisonOfProductsById (){
    let resultArrayId = dataDooglys.filter(i => !dataTilda.map(i2=>i2.id).includes(i.id))
    let resultArrayTitle = dataDooglys.filter(i => !dataTilda.map(i2=>i2.title).includes(i.title))

    console.log(colors.red('DANGER: \n-id values not found in "Tilda"'))
    console.table(resultArrayId)
    
} comparisonOfProductsById()

function comparisonOfProductsByTitle (){
    let result = dataDooglys.filter(i => dataTilda.map(i2 => i2.id).includes(i.id))
    let resultArrayTitle = dataTilda.filter(i => !result.map(i2 => i2.title.toUpperCase()).includes(i.title.toUpperCase()))
    console.log(colors.yellow('WARNING: \n-title values not found in "Tilda"'))
    console.table(resultArrayTitle)
} comparisonOfProductsByTitle()





