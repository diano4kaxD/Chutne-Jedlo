let comments = [];
loadComments(); // функция, которая инициализируется при первом запуске сайта и прогружает существующие комментарии

document.getElementById('mess_send').onclick = function(){ // функция которая запускается при нажатии на кнопку "send"
    if(document.getElementById('name').value != ''){ // собирает информацию из поля с id "name"
        if(document.getElementById('email').value != ''){ // собирает информацию из поля с id "email"
            if(document.getElementById('message').value != ''){ // собирает информацию из поля с id "message"
                event.preventDefault();
                let commentName = document.getElementById('name'); // 
                let commentEmail = document.getElementById('email'); // укладывает информацию в переменную
                let commentReview = document.getElementById('message'); // 

                
                let comment = { // заполняем структуру информацией которую получили от пользователя
                    name : commentName.value,
                    email : commentEmail.value,
                    review : commentReview.value,
                    time : Math.floor(Date.now()/1000)
                }
                document.getElementById('name').value = ''; // чистим поле name
                document.getElementById('email').value = ''; // чистим поле email
                document.getElementById('message').value = ''; // чистим поле message

                comments.push(comment);
                saveComments(); // сохраняем комментарий в локальное хранилище
                showComments(); // загружаем  и отображаем комментарий из локального хранилища
            } else {
                alert("Pls, write your review"); // в случае если поле с информацией не будет заполнено 
            }
        } else {
            alert("Pls, write your email"); // в случае если поле с информацией не будет заполнено 
        }
        
    } else {
        alert("Pls, write your name"); // в случае если поле с информацией не будет заполнено 
    }
    

}

function saveComments(){ // функция сохранения комментариев
        localStorage.setItem('comments', JSON.stringify(comments));
}
function loadComments(){ // функция загрузки комментариев
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments(){ // отображение комментариев, в данной функции в div с id "com-field" добавляется атриббут такие как time, name, email, review
    let commentField = document.getElementById('com-field');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
        out += `<p><strong>Name:</strong> ${item.name}</p>`;
        out += `<p><strong>Email:</strong> ${item.email}</p>`;
        out += `<p><strong>Review:</strong> ${item.review}</p>`;
        out += `<hr>`;
        out += `<br>`;
        
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){ // функция которая возращает время, в которое был создан пост
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}




document.getElementById('link_main').onclick = function(){ // при нажатии на кнопку с id "Link_main" начинает выполнятся функция 
    window.open ('index.html','_self',false) //открытие страницы с главным меню "index.html"

}