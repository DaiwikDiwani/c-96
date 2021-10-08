//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAfVBD8HXNV-80oSCWBSHRihe1fgvB_bLM",
      authDomain: "kwitter-ef820.firebaseapp.com",
      databaseURL: "https://kwitter-ef820-default-rtdb.firebaseio.com",
      projectId: "kwitter-ef820",
      storageBucket: "kwitter-ef820.appspot.com",
      messagingSenderId: "912498079470",
      appId: "1:912498079470:web:e932d8734b464e4fd8e5ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
      like:0

}
);

document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code















//End code
      } });  }); }
getData();






function logout()
{

localStorage.rmoveItem("user_name");


localStorage.removeItem("room_name");

window.location.replace("index.html");
}
