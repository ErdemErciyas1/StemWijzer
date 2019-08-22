var content = document.getElementById('content');
var statements = document.getElementById('statements');
var backBtn = document.getElementById('backButton');
var statement_title = document.getElementById('statement-title');
var statement = document.getElementById('statement');
var selectStatements = document.getElementById('selectStatements');
var statement_count = 0;


function Content(){
	statements.style.display = 'none';
	backBtn.style.display = 'none';
	content.style.display = 'block';
	selectStatements.style.display = 'none';	
}


function Statements(){
	content.style.display = 'none';
	statements.style.display = 'block';
	backBtn.style.display = 'block';
	statement_title.innerHTML = statement_count + 1 + '.' + subjects[statement_count].title;
	statement.innerHTML = subjects[statement_count].statement;
}

function goBack(){

	if(statement_count == 0){

		Content();

	}else{

		statement_count -= 1;

		Statements();

	}

}

