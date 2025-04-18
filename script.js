function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
	const fName = document.querySelector("#fName").value;
	const lName = document.querySelector("#lName").value;
	alert(`${fName} ${lName}`);
	
}
