let validcheck="false";

let checkId;
let checkPassword;

let menubtn = document.getElementsByClassName("menu_btn");
menubtn[0].onclick = function(){
    let navbar = document.getElementsByClassName("menu");
    console.log(navbar);
    if(navbar[0].style.display=='none'){
        navbar[0].style.display='block';
    }else{
        navbar[0].style.display='none';
    }
}



var firebaseConfig = {
    apiKey: "AIzaSyAbRit_OIY4dohuub5-CzMHaQfJu7G2-N4",
    authDomain: "chord-west.firebaseapp.com",
    databaseURL: "https://chord-west.firebaseio.com",
    projectId: "chord-west",
    storageBucket: "chord-west.appspot.com",
    messagingSenderId: "940341606564",
    appId: "1:940341606564:web:83b27a9bd69a114baa4e31",
    measurementId: "G-9WMM1JDHV5"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function writePost(username,title, body) {
    // A post entry.
    const postData = {
      name: username,
      title: title,
      body: body,
    };
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child('posts').push(postData); 
}


function getPosts(){
    const postRef = firebase.database().ref('/posts/').once('value',function(snapshot){
        const postData = Object.entries(snapshot.val());
        for(let i=0; i<postData.length; i++){
            const [key, body] = postData[i];
            console.log(key,body);
        }
        // console.log(postData);
    });

    return ;
}

function validadmin(){
    let loginform = document.loginForm;
    let inputId = loginform.id.value;
    let inputPassword = loginform.password.value;
    // console.log(inputId,inputPassword);
    if(inputId===checkId&&inputPassword===checkPassword){
        console.log("success");
    }
    else{
        alert("실패 하였습니다.");
    }
}

function loadAdminInfo(){
    firebase.database().ref('/admin/').once('value', function(snapshot){
        checkId = snapshot.val().id;
        checkPassword = snapshot.val().password;
    });
}

loadAdminInfo();

console.log(database);