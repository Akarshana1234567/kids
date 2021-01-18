
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDmRYWcOLT1Lkh4Upilr6udwfEtoVWo-po",
      authDomain: "kwitter-528d2.firebaseapp.com",
      databaseURL: "https://kwitter-528d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-528d2",
      storageBucket: "kwitter-528d2.appspot.com",
      messagingSenderId: "95851756772",
      appId: "1:95851756772:web:0fab0a24908f6e887700f1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            varshatilwani:"Excellent teacher"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_names"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById ("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}