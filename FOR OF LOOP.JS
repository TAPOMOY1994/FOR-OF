let string='Rohan';


for(let char of string){

    console.log(char);
}




let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


for(let day of days){

    console.log(day);
}





const seatingChart=[['Raj','Sam','Rohit'],
                   ['Mohan','Sanjay','Tapomoy'],
                    ['Rohan','Edward']];




for(let row of seatingChart){

    for(let student of row){
        console.log(student);
    }
}