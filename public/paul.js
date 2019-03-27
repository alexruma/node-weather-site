function paultiply(val){
document.getElementById('paul-div').innerHTML='';
if(val>9999){
val=9999;
}
for(let i=1; i<=val;i++){
let newPaul=document.createElement('img');
newPaul.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOO0BfgMriwUOrRfEM0jHTaFULNBCl1MrXOQ7I5lAD5R4yqKCwFQ';
newPaul.className='paul-img';
document.getElementById('paul-div').appendChild(newPaul);
};
};

document.getElementById('go').addEventListener('click', function(){

let num=document.getElementById('numInput').value;

paultiply(num);

});
