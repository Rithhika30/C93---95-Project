var firebaseConfig = {
      apiKey: "AIzaSyDrAVmBckswsyneaeGOw-9iYKz2sLvlS0k",
      authDomain: "kwitter-16c00.firebaseapp.com",
      databaseURL: "https://kwitter-16c00-default-rtdb.firebaseio.com",
      projectId: "kwitter-16c00",
      storageBucket: "kwitter-16c00.appspot.com",
      messagingSenderId: "756217901464",
      appId: "1:756217901464:web:857b3e032febf6710c7bed"
    };
    
firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
