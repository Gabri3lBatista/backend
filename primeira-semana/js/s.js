const formData = new FormData(document.querySelector('form'))
const inputValue = formData.get("name")
console.log(inputValue)


let varX = 50
function out(){
   function sumXand5(){
      return varX+5
   }
   return sumXand5
}
console.log(out())