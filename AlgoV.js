var color=document.getElementById("arrcolor");

window.onload=function(){
    var inputLength = document.getElementById("length");
var inputLHtag = document.getElementById("ArrayL");
inputLHtag.innerHTML = inputLength.value;

inputLength.oninput = function() {
  inputLHtag.innerHTML = this.value;
    var array=[];
            //removing prevoius blocks
            var arrContainer=document.getElementById("ArrayDisplay");
         var child=arrContainer.lastElementChild;
         while(child)
             {
                 arrContainer.removeChild(child);
                 child=arrContainer.lastElementChild;
             }
    var num=this.value;
    for(var i=0;i<num;i++)
        {
         //Adding new div blocks
            var ht=Math.floor(Math.random()*100);
         
            array.push(ht);
           var newDiv = document.createElement('div');
newDiv.style.cssText = 'opacity:0.3;z-index:100; padding:10px;margin:3px;display: inline-block;flex-direction: row';
            newDiv.style.backgroundColor=document.getElementById("arrcolor").value;
            newDiv.style.height= ht;
            newDiv.style.width=1/(num^2);
document.getElementById("ArrayDisplay").appendChild(newDiv);
            //var containerArr=window.document.getElementById("ArrayDisplay");
            //containerArr.appendChild('newDiv');
            
        }
    inputLHtag.innerHTML = array;
}

}
//console.log(array);





