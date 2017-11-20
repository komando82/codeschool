let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

	let att = parseInt(attempt.value);

    if (validateInput(input.value)) {
    	att += 1;
		attempt.value = att;
    }
    else {
    	setMessage("Guesses must be exactly 4 characters long.");
    	return false;
    }
    
    if (getResults(input.value)) {
    	setMessage("You Win! :)");
    }
    else if (!getResults(input.value) && att >= 10) {
    	setMessage("You Lose! :(");
    }
    else {
    	setMessage("Incorrect, try again.");
    }

}

//implement new functions here
function setHiddenFields() {
	
	var ans = Math.floor(10000 * Math.random());
	ans = ans.toString();

	while(ans.length < 4) {
		ans = "0" + ans;
	}

	answer.value = ans;
	attempt.value = 0;
}

if (answer.value === '' && attempt.value === '') {
	setHiddenFields();
}

function setMessage(msg) {
	let message = document.getElementById('message');
	message.innerHTML = msg;
}

function validateInput(input) {
	if(input.length == 4) {
		return true;
	}
	else {
		return false;
	}
}

function getResults(result) {

	let resultsDiv = document.getElementById('results');
	let resultsDivInner = resultsDiv.innerHTML;

	let correct = 0;

	let start = '<div class="row"><span class="col-md-6">' + result + '</span><div class="col-md-6">';
	let end = '</div></div>';
	let middle = '';

	let len = result.length;
	let ans = answer.value;

	for (let i=0;i<len;i++) {
		if (result[i] == ans[i]) {
			middle += '<span class="glyphicon glyphicon-ok"></span>';
			correct += 1;
		}
		else if (ans.indexOf(result[i]) !== -1){
			middle += '<span class="glyphicon glyphicon-transfer"></span>';
		}
		else {
			middle += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}

	resultsDiv.innerHTML = resultsDivInner + start + middle + end;

	if (correct == ans.length) {
		return true;
	}
	else {
		return false;
	}

}

function showAnswer(ans) {

	let c = document.getElementById('code');
	c.innerHTML = answer.value;

	if (ans === true) {
		c.className += " success";
	}
	else {
		c.className += " failure";
	}

} 

function showReplay() {
	document.getElementById('guessing-div').style.display = 'none';
	document.getElementById('replay-div').style.display = 'block';
}


