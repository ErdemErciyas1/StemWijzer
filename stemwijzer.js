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

function returnOpinions(){ //wanneer ik terug ga worden de geklikte buttons onthouden

	var btn = document.getElementsByClassName('btn');

	for (var i = 0; i < btn.length; i++) {

        btn[i].style.backgroundColor = "black";

    }	



	if(opinions[statement_count] != null && opinions[statement_count] != ''){

		var btn = document.getElementById(opinions[statement_count]);

		btn.style.backgroundColor = 'green';

	}

}


function Statements(){
	content.style.display = 'none';
	statements.style.display = 'block';
	chooseParties.style.display = 'none';
	backBtn.style.display = 'block';
	statement_title.innerHTML = statement_count + 1 + '.' + subjects[statement_count].title;
	statement.innerHTML = subjects[statement_count].statement;

	returnOpinions();	
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

	function goBack()
	{

		if(statement_count == 0){

			Content();
			}

		else
		{

		statement_count -= 1;

			Statements();
		}

	}
	function loadChooseStatements(){
		
		selectStatements.style.display = 'block';

		statements.style.display = 'none';
	
		chooseParties.style.display = 'none';
	
		back_btn.setAttribute("onclick", "back()");
		
	}

	function loadChooseParties(){

		results = [];
	
		selectStatements.style.display = 'none';
	
		score.style.display = 'none';
	
		chooseParties.style.display = 'block';
	
		back_btn.setAttribute("onclick", "loadChooseStatements()");
	
	}

	
	


	
	
	
	
	



	

	



