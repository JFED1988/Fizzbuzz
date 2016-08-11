function fizzbuzz(){
//count through numbers 1 to 100 and figure out if each one is divisble by 3, 5 or both
for(i=1;i<=100;i++){
	//for each number do the following check:
	//see if it is divisible by 3
	if(i % 3 === 0){
		//if so see if it is also divisible by 5
		if(i % 5 ===0){
			//if divisible by 3 and 5 print fizzbuzz
			console.log('fizzbuzz');
			document.write(i+"fizzbuzz"+"<br>");
		} else{
			//if only divisible by 3: print fizz
			console.log('fizz');
			document.write(i+"fizz"+"<br>");
		}
	}else if(i % 5 ===0){
		//see if it is divisible by 5
		// if so print buzz
		console.log('Buzz')
		document.write(i+"Buzz"+"<br>");
	}else{
		//see if it is not divisible by 3 or 5
		//if so print number
		console.log(i);
		document.write(i+"<br>");
	}
}
}
fizzbuzz();