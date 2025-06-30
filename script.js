//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function (){
	const input = document.getElementById("ip").value;
	const outputDiv = document.getElementById("output");
	let number = Number(input);

	outputDiv.innerText = "";

	const step1 = new Promise((resolve)=>{
		setTimeout(()=>{
			outputDiv.innerText = `Result: ${number}`;
			resolve(number);
		}, 2000);
	});

	step1.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let result = num*2;
				outputDiv.innerText = `Result: ${result}`;
				resolve(result);
			}, 1000);
		});
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let result = num-3;
				outputDiv.innerText = `Result: ${result}`;
				resolve(result);
			}, 1000);
		});
	})
	.then ((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let result = num/2;
				outputDiv.innerText = `Result: ${result}`;
				resolve(result);
			}, 1000);
		});
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let result = num+10;
				outputDiv.innerText = `Final Result: ${result}`;
				resolve(result);
			}, 1000);
		});
	});
});