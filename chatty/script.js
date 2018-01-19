// Copyright 2018 Google Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9VRDOmhrvRGc4FZvqzXMStahAb7wdyc8",
  databaseURL: "https://hola-chatty.firebaseio.com"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('/messages');

/**
 * Sends a message to the Firebase message store.
 *
 * @param user The name of the user sending the message (string)
 * @param message The content of the message (string)
 */
function sendMessage(user, message) {
  messagesRef.push({
    user: user,
    message: message
  });
}

/**
 * Retrieves messages from Firebase.
 *
 * @param callback Callback function which takes a username and message
 *     argument
 */
function getMessages(callback) {
  messagesRef.on('child_added', function(data) {
    var val = data.val();
    callback(val.user, val.message);
  });
}

/**
 * Reloads all messages from Firebase.
 *
 * @param callback Callback function which takes a username and message
 *     argument
 */
function reloadMessages(callback) {
  messagesRef.once('value', function(data) {
    var val = data.val();
    for (var entry in val) {
      var msg = val[entry];
      callback(msg.user, msg.message);
    }
  });
}

// Make a string from Unicode code point.
function stringFromCodePoint(codePoint) {
  var TEN_BITS = parseInt('1111111111', 2);
  if (codePoint <= 0xFFFF) {
    return String.fromCharCode(0, codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xD800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

  return String.fromCharCode(leadSurrogate, tailSurrogate);
}

var EMOJI_SMILE = stringFromCodePoint(0x1F600);
var EMOJI_ROFL = stringFromCodePoint(0x1F602);
var EMOJI_ROLL = stringFromCodePoint(0x1F644);
