let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType="json";
request.send();
request.onload = function(){
    let request2 = new XMLHttpRequest();
    request2.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request2.responseType="json";
    request2.send();
    request2.onload = function(){
        let posts = request2.response;
        var array = []; 
        for (post of posts) {
            array.push([post.id, post.userId, post.title, post.body]);
        }
        let list = document.getElementById("container2");
        for (let index = 0; index < array.length; index++) {
            if (array[index][1]== "1") {
                
                let item = document.createElement("div");
                let title = document.createElement("h4");
                let body = document.createElement("p");
                item.className = "list-posts";
                title.innerHTML= array[index][2] + "<hr>";
                body.innerHTML = array[index][3];
                item.append(title);
                item.append(body);
                list.append(item);
            }
        }
        document.getElementById("item1").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "1") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item2").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "2") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item3").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "3") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item4").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "4") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item5").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "5") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item6").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "6") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item7").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "7") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item8").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "8") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item9").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "9") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
        document.getElementById("item10").addEventListener("click", function(){
            list.innerHTML="";
            for (let index = 0; index < array.length; index++) {
                if (array[index][1]== "10") {
                    
                    let item = document.createElement("div");
                    let title = document.createElement("h4");
                    let body = document.createElement("p");
                    item.className = "list-posts";
                    title.innerHTML= array[index][2] + "<hr>";
                    body.innerHTML = array[index][3];
                    item.append(title);
                    item.append(body);
                    list.append(item);
                }
            }
        })
    }   
    let users = request.response;
    let userIds = [];
    for(user of users){
        let list = document.getElementById("container1");
        var item = document.createElement("div");
        let name = document.createElement("h3");
        let email = document.createElement("p");
        userIds.push(user.id);
        item.className = "list-users";
        item.id ="item" +user.id;
        name.innerText= user.name;
        email.innerText = user.email;
        item.append(name);
        item.append(email);
        list.append(item);   
    }
}