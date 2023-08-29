function appendLi()
{
    
  var ul = document.getElementById("lang");
  var li = document.createElement("li");
  var text ="<span class='i'>"+document.getElementById("in").value+'</span>&nbsp&nbsp&nbsp<span class="togglee">pending</span>&nbsp&nbsp<button class="modif">modify</button>';  
 // is a node
li.innerHTML = text;  

  ul.appendChild(li);
  toggle2()
  toggle4()

  modifiertoggle()
}

document.getElementById("demo").onclick = function() {appendLi()};
function toggle2(){
function change(e){
    
    if(e.textContent=='completed')
    {e.textContent='pending'}
    else{e.textContent='completed'}

}
toggle=document.getElementsByClassName("togglee");
for (index = 0; index < toggle.length; ++index) {
    toggle[index].onclick=function() {
    
    change(this)}
}}
function toggle4(){
function remove(e){
  e.remove();
}
toggle3=document.getElementsByTagName("li");
for (index = 0; index < toggle3.length; ++index) {
  toggle3[index].ondblclick=function() {remove(this)};
}}
toggle2()
toggle4()
function modifiertoggle(){
function modifier(e){
  
  parent =e.parentElement
  for (const child of parent.children) {
   
   if(child.className =="i"){
    i=document.getElementById("in")
 
     i.value=child.innerText
   }
 }
  parent.remove() 
 }
  


toggleeee=document.getElementsByClassName("modif");
for (index = 0; index < toggleeee.length; ++index) {
  toggleeee[index].onclick=function() {
  
  modifier(this)
}
}
}
modifiertoggle()
