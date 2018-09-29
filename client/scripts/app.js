
// YOUR CODE HERE:
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });



/*
Stuff might use later; 

 // triggered: function (message) {

  //   $(`.${$user}`).on('click', function () {
  //     $('#main').append(`<div class=${$user}>${$user}</div>'`);
    
  //   }); 
  // },

  // $(`.${$user}`).click (function () {
//   console.log('hellloooooo')
//   $('#main').append(`<div class=${$users}>${$user}</div>'`);
//   app.usersFriendsArray.push(users.username);
// }))

*/

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// $('.shawndrost').on('click', function () {
//   $('#main').append('<div class="shawndrost">shawndrost</div>');

// }); 


// $( document ).ajaxSend(function() {
//   $( '#chats' ).text($('.ajax'.data));
// });


var fetchData;



var app = {

  userFriendsArray: [],

  init: function () {
    $chats = $('#chats');
  },

  send: function (message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
    
  },

  fetch: function (message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: {order: '-createdAt'},
      contentType: 'application/json',
      success: function (data) {
        fetchData = data;
        for (var i = 0; i < fetchData.results.length; i++) {
          app.renderMessage(fetchData.results[i]);
        }

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }, 

  clearMessages: function (message) {
    $('#chats').html('');
  },

  renderMessage: function (fetchData) {
    if (Array.isArray(fetchData.results)) {
      console.log('is array');
      $('#chats').append(`<div class= ${$user} class='message'>${fetchData}</div>`);
      // $('#main').append('<div class="username">'+message.username+'</div>');
      $('#main').on('click', function () {
        $('#main').append(`<div class="friend">${$user}</div>`);
      });
    } else {
      var $user = fetchData.username;
      var $message = fetchData.text;
      var userFriendsArray = [];
      $('#chats').append(`<div class= ${$user} class='message'> ${$user}: ${$message}</div>`);
      // $('#main').append('<div class="username">'+message.username+'</div>');
      $(`.${$user}`).on('click', function () {
        if (userFriendsArray.includes(fetchData.username) === -1) {
          $('.username').append(`<div class=${$user}>${$user}</div>`);
          userFriendsArray.push(fetchData.username);
        }
      });
    }
    // var room = message.roomname;
    // $('#chats').append('<div class="rooms">'+room+'</div>');
    // var selectList = document.createElement("select");
    // selectList.id = "mySelect";
    // selectList.val(message.roomname)
    // myDiv.appendChild(selectList);
    app.handleUsernameClick('.username');
  },

  renderRoom: function (room) {
    $('#roomSelect').append('<div class="rooms">' + message.roomname + '</div>');
  },
  
  handleUsernameClick: function (fetchData) {
    // var $user = message.username;
    $('#chats').on('click', function () {
      // for (var i = 0; i < fetchData.results.length; i++) {
      // $('#main').append(fetchData.results[i].username);
      // $('#main').append(`<div class="friend">${$user}</div>`);
      // }
    }); 
    // app.usersFriendsArray.push($user);
    
  },

  handleSubmit: function (message) {
    $('.submit').on('click', function () {
      var $input = $('#send').val();
      var message = {};
      message.text = $input;
      message.username = 'username=';
      var $message = $(`<div id='message'></div>`);
      app.send(message);
    //   $message.appendTo('#chats');
    //   $message.text(message.text);
    //   $('#send').val("");
    });
  }


};

// app.renderMessage(fetchData)
app.handleSubmit();






/*
addFriend:
  create <div class='friends'>
  we need to create click functionality for username
    this adds pushes user's name into friend array;
  and Also pushes into the HTML friends div; 
    //it should save the user's name;


submit: 

need to add input box for username
need to make sure that username added has same class so addfriend 



*/