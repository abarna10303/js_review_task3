let person1=parseInt(prompt("Enter the First Person Age"));
let person2=parseInt(prompt("Enter the Second Person Age"));
let person3=parseInt(prompt("Enter the Thrid Person Age"));
if(person1>person2 && person1>person3)
{   
        console.log(person1+"  First Person Age is Elder than Second and Thrid Persons");
}
else if(person2>person1 && person2>person3)
{
    console.log(person2+"  Second Person is Elder than First and Thrid Persons");
}
else
{
    console.log(person3+"  Thrid Person Age is Elder than First and Second Persons");
}