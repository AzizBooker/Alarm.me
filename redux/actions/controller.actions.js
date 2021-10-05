export const toggleIsActive={
    type:"controller/toggleIsActive"
}

 const setIsActive=(flag)=>{
     return{
    type:'controller/setIsActive',
    payload:flag
     }
     }