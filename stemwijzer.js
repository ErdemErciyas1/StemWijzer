var content = document.getElementById('content');
var statements = document.getElementById('statements');
var backBtn = document.getElementById('backButton');
var statement_title = document.getElementById('statement-title');
var statement = document.getElementById('statement');
var selectStatements = document.getElementById('selectStatements');
var chooseParties = document.getElementById('chooseParties');
var statement_ul = document.getElementById('statements-ul');
var statement_title = document.getElementById('statement-title');
var parties_ul = document.getElementById('parties-ul');
var statement_count = 0;
var score = document.getElementById('score');
var results = [];
var points = 0; 
var opinions = [];


function Content(){
	statements.style.display = 'none';
	backBtn.style.display = 'none';
	content.style.display = 'block';
	selectStatements.style.display = 'none';	
	chooseParties.style.display = 'none';
}



function Statements(){
	content.style.display = 'none';
	statements.style.display = 'block';
	chooseParties.style.display = 'none';
	backBtn.style.display = 'block';
	statement_title.innerHTML = statement_count + 1 + '.' + subjects[statement_count].title;
	statement.innerHTML = subjects[statement_count].statement;

	showSelectedOpinions();	
}


	function skipChoice(opinion){

		opinions[statement_count] = opinion;
	
		if(statement_count != 11){
	
			statement_count += 1; 
	
			Statements();
	
		}else{
	
			statement_count += 1;
	
			loadChooseStatements();
	
		}		
	
	}

	
function goBack(){

	if(statement_count == 0){

		Content();

	}else{

		statement_count -= 1;

		Statements();

	}

	

}

