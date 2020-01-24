// ===== get input ellement
let filterInput = document.getElementById('filterInput');

// ======= add event listener
 filterInput.addEventListener('keyup', filterNames);

 function filterNames(){
    //  get input value

    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    

//  ====== get names ul 
let ul = document.getElementById('names');
// ======== get collection items li

let li = ul.querySelectorAll('li.collection-item');
//  ====== loop through collection items 

for(let i = 0; i<li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    // if matches
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
    }else{
        li[i].style.display = 'none';
        let headerCls = ul.querySelector('.collection-header');
        headerCls.style.display = 'none';
    }
}
}