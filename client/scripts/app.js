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
    app.fetch();
    setTimeout(app.fetch, 1000);
    app.handleSubmit();
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
            app.renderRoom(fetchData.results[i].roomname)
        }

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }, 

  clearMessages: function (fetchData) {
    $('#chats').html('');
  },

  renderMessage: function (fetchData) {

    var $user = fetchData.username;
    var $message = fetchData.text;

    var userFriendsArray = [];
    
    $('#chats').append(`<div class= ${$user} class='message'> ${$user}: ${$message}</div>`);
    if((fetchData.text && !fetchData.text.includes('<') && fetchData.text !== '')  && (fetchData.username && !fetchData.username.includes('<'))) {
      $(`.${$user}`).on('click', function () {
      $('.username').append(`<div class=${$user}>${$user}</div>`);
        userFriendsArray.push(fetchData.username);
      });
    }

    app.handleUsernameClick('.username');
    // var room = message.roomname;
    // $('#chats').append('<div class="rooms">'+room+'</div>');
    // var selectList = document.createElement("select");
    // selectList.id = "mySelect";
    // selectList.val(message.roomname)
    // myDiv.appendChild(selectList);
  },

  renderRoom: function (room) {
    var roomName = room.roomname; 
    if (roomName && !roomName.includes('<') && roomName !== '') {
      $('#roomSelect').append('<div class="rooms">' + room.roomname + '</div>');
    }
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
      $('#send').val('');
      var message = {};
      message.text = $input;
      message.username = 'Tommy Wiseau';
      message.roomname = 'The Room';
      var $message = $(`<div id='message'></div>`);
      app.send(message);
    });
  },

  roomChange: function () {
    $('.roomSelect').on('click', function () {
      app.roomName = $('.roomSelect').val();
      app.fetch(app.roomName);
    })
  }
};

app.init();






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

roomName => need to fetch roomData

*/