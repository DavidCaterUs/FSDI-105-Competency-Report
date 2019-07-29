const salon={ //object
      name:'Fashion Pets',
      phone:'954-288-7580',
      address:{ //object inside an object
          street:'5th Avenue',
          number:'25-A',

    },
      workingHours:{
        Open:'8:00 am',
        Close:"5:00 pm",
      },
      pets:[]

         //empty array
};

//object destructing



let{name,phone,address:{street,number},workingHours:{Open,Close}}=salon



//document.getElementById('info').innerHTML=`<h2> ${name} (${phone}), ${street}
//{number} <br> it is open from ${Open} to ${Close} </h2>`;


var petId=0;
function Pet(name,age,service,owner,contactPhone){
  this.id='pet'+petId;
  petId+=1;
  this.hunger=10;
  this.happiness=5;
  this.name=name;
  this.age=age;
  this.contactPhone=contactPhone;
  this.owner=owner;
  this.service=service;
  this.feed=function(){
  this.hunger-=10;
  this.happiness+=10;
  }

  this.status=function(){
    console.log(this.name + 'hunger' + this.hunger + 'happiness' + this.happiness);
  };
  this.ownerContact=function(){
    console.log('Owner name:'+ this.owner + '\n' + 'Phone:'  + this.contactPhone);
  };
  this.customers=function(){
    document.write(this.name);
  };

}






// console.table(salon.pets);
//
//
//
// var pet1 = new Pet("Zoey ",2,"Shower","Omar","954-288-7580");
// var pet2 = new Pet("Sally ",4,"Cut","Sabrina","954-328-8765");
// var pet3 = new Pet("Bruno ",6,"Cut Nails","Pablo","954-347-9876");
//
//
//
//
// // salon.pets.push(pet1);
// // salon.pets.push(pet2);
// salon.pets.push(pet3);
//
//
// pet1.ownerContact('Omar');
// pet2.ownerContact('Sabrina');
// pet3.ownerContact('Pablo');

// pet1.customers('Zoey ');
// pet2.customers('Sally ');
// pet3.customers('Bruno ');


function registerPet(){
    var txtname= document.getElementById("name");
    var txtage = document.getElementById("PetAge");
    var txtservice= document.getElementById("services");
    var txtownername=document.getElementById("OwnerName");
    var txtphone=document.getElementById("phone");

    var age = parseInt(txtage.value);
    var thePet = new Pet (txtname.value,age,txtservice.value,txtownername.value
    ,txtphone.value);

    console.log(thePet);
    salon.pets.push(thePet);
    eraseForm();
    displayTable(thePet);

}

//alert("You have "+ salon.pets.length + " registered ... ");



function eraseForm(){
  document.getElementById('name').value="";
  document.getElementById('PetAge').value="";
  document.getElementById('services').value="";
  document.getElementById('OwnerName').value="";
  document.getElementById('phone').value="";
}

function display(aPet){
  var list=document.getElementById("petList");
  var li = document.createdElement('li');
  li.innerText=aPet.id + "---" + aPet.name + "---" + aPet.services;
  li.classList.add('petList');
  list.appenChild(li);
}


function displayTable(aPet) {
  var tbody=document.getElementById('listBody');
  var row = `<tr id=${aPet.id}> <td> ${aPet.id} </td> <td> ${aPet.name} </td>
  <td> ${aPet.age} </td> <td> ${aPet.service} </td> <td> ${aPet.owner} </td>
  <td> ${aPet.contactPhone} </td>  <td> <button class="btn btn-dark" onclick="remove(${aPet.id});"> Remove </button> </td> </tr>`;
  tbody.innerHTML+=row;
}

function remove (idpet){
  //console.log('I Want to remove' + idpet);
  var indexDelete=0;
  for(var i=0; i< salon.pets.length; i++){

      var indexPet = salon.pets[i];
      if(indexPet.id===idpet)
    {
      indexDelete=i;
    }

  }
  salon.pets.splice(indexDelete,1);
  var tr = idpet;
  tr.remove();
}

function search(){
   var txtsearch=document.getElementById("search");
   var searchString=txtsearch.value;

   var foundedPet=0;
   for(var j=0; j< salon.pets.length; j++){

       var searchPet = salon.pets[j];
       if(searchPet.name===searchString)
     {
       foundedPet=j;
     }

}
var theFoundedPet=salon.pets[foundedPet];
console.log(theFoundedPet);
}
