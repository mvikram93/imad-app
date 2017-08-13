window.onload =function(){	
//var button = "Hello";//document.getElementById("bottom");
var submit = document.getElementById("bottom");
//alert(submit);
var submit_btn = document.getElementById('submit_btn');

submit_btn.onclick = function(){
	var request = new XMLHttpRequest();
//console.log("Request is initialized");
	request.onreadystatechange  = function(){
	
//console.log("readyState changed");
	if(request.readyState === XMLHttpRequest.DONE){
	if(request.status === 200){
	var value = request.responseText;

	var value = JSON.parse(value); 
	//var value = ["Vikram","Vimal","Antony"];
	var list="";
	for(i = 0; i<value.length ;i++){
	list += "<li>"+value[i]+"</li>";
	}
	var listItem = document.getElementById("listItem");
	listItem.innerHTML= list;
		//alert("Button clicked");
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
	}
	}
	};
	
var name = document.getElementById('name');
var value = name.value;
	request.open("GET","http://localhost/submit?name="+value,true);
		request.send(null);
	
	
};
};

/*button.onclick = function(){
alert(submit+"---"+name);

	var request = new XMLHttpRequest();
//console.log("Request is initialized");
	request.onreadystatechange  = function(){
	
//console.log("readyState changed");
	if(request.readyState === XMLHttpRequest.DONE){
	if(request.status === 200){
	var counter = request.responseText;
	alert(counter); 
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
	}
	}
	};
	request.open("GET","http://localhost/counter",true);
		request.send(null);
};*/

