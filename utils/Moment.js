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


export const getRelativeTimeFromNow=(currentDate,targetDate)=>{
   //return moment(date,"dddd, h:mm a").fromNow()
if (currentDate ==null){
 currentDate=moment().format('dddd, h:mm a')
}
var duration=convertToMomentDuration(currentDate,targetDate)
var hours=parseInt(duration.asHours())
var minutes=parseInt(duration.asMinutes())%60
console.log(`${hours} Hours and ${minutes} Minutes`)
return (`${hours} Hours and ${minutes} Minutes`)
}

const convertToMomentDuration=(startTime,endTime)=>{
    startTime=moment(startTime,'dddd, h:mm a')
    endTime=moment(endTime,"dddd, h:mm a")
    var duration= moment.duration(endTime.diff(startTime))
    return duration
}
/*
export const getDateDifferenceInMilliSeconds=(startTime,endTime)=>{
    startTime=moment(startTime,'dddd, h:mm a')
    endTime=moment(endTime,"dddd, h:mm a")
    var duration= moment.duration(endTime.diff(startTime))
    return duration.asMilliseconds()
}
*/
export const getDateDifferenceInHours=(startTime,endTime)=>{
    
}
//console.log(moment().format('dddd, h:mm a'))