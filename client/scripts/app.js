
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

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

$('.shawndrost').on('click', function () {
  $('#main').append('<div class="shawndrost">shawndrost</div>');

}); 


$( document ).ajaxSend(function() {
  $( '#chats' ).text($('.ajax'.data));
});






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
      // url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
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
    // $.get( message, function() {
    //   alert( "success" );
    // })
  }, 

  clearMessages: function (message) {
    $('#chats').html('');
  },

  renderMessage: function (message) {
    var $user = message.username;
    var $message = message.text;
    
    $('#chats').append(`<div class='test' class='message'> ${$user}: ${$message}</div>`);
    // $('#main').append('<div class="username">'+message.username+'</div>');
    $('#main').on('click', function () {
      $('#main').append(`<div class="friend">${$user}</div>`);
    });
    // var room = message.roomname;
    // $('#chats').append('<div class="rooms">'+room+'</div>');

    app.handleUsernameClick('.username');
  },

  renderRoom: function (room) {
    $('#roomSelect').append('<div class="rooms">' + message.roomname + '</div>');
  },
  
  handleUsernameClick: function () {
    // var $user = message.username;
    $('#main').on('click', function () {
      // $('#main').append(`<div class="friend">${$user}</div>`);
    }); 
    // app.usersFriendsArray.push($user);
    
  },


  
};


