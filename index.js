import { convertExcelDooglysToJson } from "./parsers.js";
import { convertExcelTildaToJson } from "./parsers.js";


let dataDooglys = convertExcelDooglysToJson()
let dataTilda = convertExcelTildaToJson()


function compare (){
    let resultArrayId = dataDooglys.filter(i => !dataTilda.map(i2=>i2.id).includes(i.id))
    let resultArrayTitle = dataDooglys.filter(i => !dataTilda.map(i2=>i2.title).includes(i.title))

    console.log('id values not found in "Tilda"', console.table(resultArrayId))
    console.log('title values not found in "Tilda"', console.table(resultArrayTitle))
} compare()

