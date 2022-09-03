// from 2-6 to connect to API
let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType="json";
request.send();
request.onload = function(){  // 6-22 add users to page
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
    let request2 = new XMLHttpRequest();  // 23-27 call posts
    request2.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request2.responseType="json";
    request2.send();
    request2.onload = function(){
        let posts = request2.response;
        var array = [];   // 29-32 add posts to array  ( multidimensional )
        for (post of posts) {
            array.push([post.id, post.userId, post.title, post.body]);
        }
        let list = document.getElementById("container2");
        for (let index = 0; index < array.length; index++) {   // 34-46 add posts of the first user to page
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
        var hh = document.getElementsByClassName("list-users")
        for (let i = 0; i < hh.length; i++) {
            for (let j = 0; j < userIds.length; j++) {
                if (hh[i].id=="item"+userIds[j]) {   // compare html element id to user id
                    hh[i].addEventListener("click", function(){
                        list.innerHTML="";   // remove the prev user's posts
                        for (let index = 0; index < array.length; index++) {   // if html id == user id add posts
                            if (array[index][1]== userIds[j]) {
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
            }   
        }
    }    
}