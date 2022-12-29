const maxnumber=6
 
for(let i=0; i<maxnumber; i++)
{
   const numberofstars= i + 1
   let lineofstars=""
   for(let j = 0; j < numberofstars;j++ )
   {
    lineofstars=lineofstars + " * "
   }
   console.log(lineofstars)
}