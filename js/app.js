function fizzbuzz(){
//count through numbers 1 to 100 and figure out if each one is divisble by 3, 5 or both
var limit = (prompt("How high do you want to play FizzBuzz?"));
	for(var counter = 1; counter <= limit; counter++){
	//for each number do the following check:
	//see if it is divisible by 3
		if(counter % 3 === 0){
			//if so see if it is also divisible by 5
			if(counter % 5 ===0){
				//if divisible by 3 and 5 print fizzbuzz
				console.log('fizzbuzz');
				document.write(counter+"fizzbuzz"+"<br>");
			} else{
				//if only divisible by 3: print fizz
				console.log('fizz');
				document.write(counter+"fizz"+"<br>");
			}
		}else if(counter % 5 ===0){
			//see if it is divisible by 5
			// if so print buzz
			console.log('Buzz')
			document.write(counter+"Buzz"+"<br>");
		}else{
			//see if it is not divisible by 3 or 5
			//if so print number
			console.log(counter);
			document.write(counter+"<br>");
		}
	}
	}
fizzbuzz();