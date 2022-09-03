let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType="json";
request.send();
request.onload = function(){
    
    
    let users = request.response;
    for(user of users){
        let list = document.getElementById("container");
        let item = document.createElement("div");
        let name = document.createElement("h3");
        let email = document.createElement("p")
        item.className="list-item";
        name.innerText= user.name;
        email.innerText = user.email;
        item.append(name);
        item.append(email);
        list.append(item);
        console.log(user);
    }
}