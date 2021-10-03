import moment from "moment"

//Gets the current time in Hour:Minute Format
export const getCurrentTime=()=>{ 
    return moment().format('LT')
}
//Gets current date in "Dec,23,2021"  format
export const getCurrentDate=()=>{  
    return moment().format("MMM Do,YYYY")
}
//Gets current date in "Monday" format
export const getCurrentDay=()=>{
    return moment().format("dddd")
}


export const getRelativeTimeFromNow=(date)=>{
   //return moment(date,"dddd, h:mm a").fromNow()
const targetDate=moment().format(date)
const currentDate=moment().format('dddd, h:mm a')
console.log(targetDate)
console.log(currentDate)
console.log(getDateDifferenceInMilliSeconds(targetDate,currentDate))
    
}


const getDateDifferenceInMilliSeconds=(a,b)=>{
    return moment(a).diff(b)
}

//console.log(moment().format('dddd, h:mm a'))