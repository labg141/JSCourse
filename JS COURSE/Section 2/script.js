/*
//LECTURE: variables
var name = 'Luis';
console.log(name);

var lastName = 'Balderrama';
console.log(lastName);

var age = 24;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//JAVAVACRIPT DATATYPES
/*
	Number
	String
	Boolean
	Undefined : No value assigned yet
	Null : Non-Existent
*/


//LECTURE: variables 2
/*
var name = 'Luis';
var age = 24;

//console.log(name + age)
//console.log(age +age);

var job, isMarried;

//console.log(job)

job = 'Web Developer';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'twenty four';
job = 'chef';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt("What is te last name?");
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.')
//TYPE COERSION
//JS automatically converts evertything to the same datatype when it needs to
*/




//Lecture: operators
/*
var now = 2018;
var birthYear = now - 25

birthYear = now - 25 * 2;
//2016 - 52
//1968
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark =  (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26
ageJohn++;
ageMark *= 2 
//ageMark = ageMark * 2

console.log(ageJohn);
console.log(ageMark);
*/



///////////////////////////////////////////////////////
//Lecture: if/else statements
/*
var name = 'John';
var age = 26
var isMarried = 'yes';

if (isMarried === 'yes')
{	
	console.log(name + ' is married!');
}
else
{
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

/*if(isMarried)
{
	console.log('YES!');
}
else 
{
	console.log('NO!');
}

if(isMarried)
{
	console.log('YES!');
}

if (23 === "23") 
{
	console.log('Something to print...')
}
*/



///////////////////////////////////////////////////
//Lecture: Boolean logic and switch
/*
var age = 20;
if (age < 20)
{
	console.log('John is a teenager.');
}
else if( age >= 20 && age < 30)
{
	console.log('John is a young man.');
}
else
{
	console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job)
{
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drivas a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
		break;
}
*/


/////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times is age wins (what a silly game :) )

1. Create variables for the heights and ages of two friend and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch te solution, it's no problem :)
*/
/*
var johnAge, markAge, luisAge;

johnAge = 13;
markAge = 13;
luisAge = 13;

var johnHeight, markHeight, luisHeight;
johnHeight = 150;
markHeight = 150;
luisHeight = 150;

var johnScore, markScore, luisScore;
johnScore = johnHeight + johnAge * 5;
markScore = markHeight + markAge * 5;
luisScore = luisHeight + luisAge * 5;

if (johnScore > markScore && johnScore > luisScore)
{	
	console.log('John wins! Score:' + johnScore);
}
else if (markScore > johnScore && markScore > luisScore)
{
	console.log('Mark wins! Score:' + markScore);
}
else if (luisScore > johnScore && luisScore > markScore)
{
	console.log('Luis wins! Score:' + luisScore);
}
else {
	if (johnScore === luisScore &&  johnScore === markScore)
	{
		console.log('It\'s a draw! John\'s score: ' + johnScore + ' Mark\'s Score:'+ markScore + ' Luis\'s Score: ' + luisScore);
	}
	else if(johnScore === markScore)
	{
		console.log('It\'s a draw! John\' score: ' + johnScore + ' Mark\'s Score:'+ markScore);
	}
	else if(johnScore === luisScore)
	{
		console.log('It\'s a draw! John\' score: ' + johnScore + ' Luis\'s Score:'+ luisScore);
	}
	else
	{
		console.log('It\'s a draw! Mark\s score: ' + markScore + ' Luis\'s Score:'+ luisScore);	
	}
	
}
*/


/////////////////////////////////////////////////////////////
// Lecture: Functions

/*function CalculateAge(yearOfBirth)
{
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = CalculateAge(1990);
var ageMike = CalculateAge(1969);
var ageMary = CalculateAge(1948);

function YearsUntilRetirement(name, year)
{
	var age = CalculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0)
	{
		console.log(name + ' retires in ' + retirement + ' years.');
	}
	else
	{
		console.log(name + ' is already retired.');
	}
	
}
YearsUntilRetirement('John', 1990);
YearsUntilRetirement('Mike', 1969);
YearsUntilRetirement('Mary', 1948);
*/

////////////////////////////////////////////////////////////////
// Lecture: Statements and expressions
/*
//Statement
function SomeFun(par)
{
	//code
}

//Expression
var someFun = function(par){
	//code
}

//Expression examples
3 + 4;
var x = 3;

//Statement examples
if (x === 5)
{
	//do something
}*/





////////////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['Jhon', 'Jane', 'Mark'];
var years = new Array(1990, 1069, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['Jhon', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.')
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1)
{
	console.log('John is NOT a teacher.');
}*/




//////////////////////////////////////////////////////////////////////////
//Lecture: Objects and Properties
/*
//Object Literal
var john = {
	Name: 'John',
	LastName: 'Smith',
	YearOfBirth: 1990,
	Job: 'teacher',
	IsMarried: false
}

console.log(john.LastName);
console.log(john['LastName']);

var xyz = 'Job';

console.log(john[xyz]);

john.LastName = 'Miller';
john['Job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.Name = 'Jane';
jane.LastName = 'Smith';
jane['YearOfBirth'] = 1969;
jane['Job'] = 'retired';
jane['IsMarried'] = true;

console.log(jane);*/





//////////////////////////////////////////////////////////////////
// Lecture: Objects and methods
//v1.0
/*
var john = {
	Name: 'John',
	LastName: 'Smith',
	YearOfBirth: 1990,
	Job: 'teacher',
	IsMarried: false,
	Family: ['Jane', 'Mark', 'Bob'],
	CalculateAge: function()
	{		
		return 2016 - this.YearOfBirth;
	}
}

console.log(john.CalculateAge());

var age = john.CalculateAge();
john.age = age;

console.log(john);


//v2.0
var john = {
	Name: 'John',
	LastName: 'Smith',
	YearOfBirth: 1990,
	Job: 'teacher',
	IsMarried: false,
	Family: ['Jane', 'Mark', 'Bob'],
	CalculateAge: function()
	{		
		this.age =  2016 - this.YearOfBirth;
	}
}

john.CalculateAge();

console.log(john);


var mike = {	
	YearOfBirth: 1950,	
	CalculateAge: function()
	{		
		this.age =  2016 - this.YearOfBirth;
	}
}

mike.CalculateAge();

console.log(mike);
*/



////////////////////////////////////////////////////////////
// Lecture: Loops
/*
for (var i = 0; i < 10; i++)
{
	console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++)
{
	console.log(names[i]);
}

for (var i = names.length - 1 ; i >= 0; i--)
{
	console.log(names[i]);
}

var i = 0;
while (i < names.length) 
{
	console.log(names[i]);
	i++;
}

for(var i = 1; i <= 5; i++)
{
	console.log(i);
	if (i === 3)
	{
		break;
	}
}


for(var i = 1; i <= 5; i++)
{	
	if (i === 3)
	{
		continue;
	}
	console.log(i);
}*/


/////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 2

/*
	1. Create an array with some years where persons were born
	2. Create an empty array (just [])
	3. Use a loop to fill the array with the ages of the persons
	4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age
	5. Finally, create a function called PrintFullAge which receives the vector of years as an argument, executes the steps 2, 3 and 4 and returns a vector oF true/false boolean values: true if the person is of full age (>= 18 years) and false if not (<18 18 years)
	6. Call the function with two different vectors and store the results in two variables: full_1 and full_2

	Example input: [1965, 2008, 1992]
	Example output: [true, false, true]

	Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
function PrintFullAge(yearVector)
{
	var ages = CalculateAges(yearVector);
	var booleanVector = [];
	for (var i = 0; i < ages.length; i++)
	{						
		if (ages[i] >= 18)
		{
			booleanVector.push(true);
		}
		else
		{
			booleanVector.push(false);
		}
		
	}
	return booleanVector;
}

function CalculateAge(year)
{
	return 2018 - year;
}
function CalculateAges(yearVector)
{
	var ages = [];
	for (var i = 0; i < yearVector.length; i++)
	{		
		ages.push(CalculateAge(yearVector[i]));
	}

	i = 0;
	while (i < ages.length)
	{		
		if (ages[i] >= 18)
		{
			console.log('Full of age, Person is: ' + ages[i]);
		}
		else
		{
			console.log('Not of full age, Person is: ' +ages[i]);
		}
		i++;
	}

	return ages;
}


var years = [1993, 1960, 1992, 1997, 2000];

CalculateAges(years);
var years2 = [1980, 2001, 1989, 1967, 2006];
var year3 = [1995, 1999, 1849, 2001, 1990];




var full_1 = PrintFullAge(years);
var full_2 = PrintFullAge(years2);


