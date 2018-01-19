# Chatty App

Welcome to Chatty! This is a real-time web-based chat application that you can use to talk to all of your friends.

## 1. Getting started

### Running the app

* Clone the hola-chatty project from `https://github.com/johnheroy/hola-chatty.git` into a new Cloud9 workspace
* Open your new workspace
* Double-click on `index.html`
* Click Preview -> Live Preview File at the top of the window
* Click the button in right pane next to "Browser" that says "pop out in new window"

### Debugging (Chrome developer tools)

* Once you have your `index.html` running in a new window, right click on the page and click "inspect element"

## Instructions

Your first task is to take Firebase messages from the message store and display them
in chatty's UI.

You can already send new messages to Firebase and see new messages from everyone
else in the console, but it will be more convenient for most users to see
messages in the provided `<textarea>`.

**You are going to be editing `index.html`, don't worry about changes anywhere else**

1. Get the `<textarea>` in JavaScript using `document.getElementById`
2. Add some "static" text to the text area using `.value`
3. Update the `<textarea>` with every new message that comes in with the username and message added together (concatenated) as a single string
4. Add *all* the messages to the `<textarea>` by separating with a newline character `'\n'`


## 2. Adding Color

In this exercise, we're going display our messages in a different color from the messages of our friends.

### Getting in Style

1. To add color, we're going to have move beyond the `<textarea>` tag (it only supports plain text).
2. Instead we're going to create `<div>` that looks like a `<textarea>` but can hold pretty much anything inside it.
3. So first let's delete the `<textarea>` tag and our code adding to the `.value` of the text area.
4. Then replace it with a `<div>` tag that has the same ID as before and also has `contenteditable` inside the opening `<div>` tag.
5. Reload the browser. There's nothing visible! Now add `class="textarea"` inside the open `<div>` tag.
6. What happened? Look at `styles.css`.

### Adding Structure

1. To display messages, we're going to need to build HTML structure. To do this,
   we first create a new HTML node 
2. Example: Create text node.
3. Example: Create div with text node. Set the class.
4. Make this into the following function and call it a couple times to test it.
   ```javascript
    function addChatMessage(chatBox, user, message, isMine) {
        // TODO: Fill me in.
        
        // HINT:
        chatLine.className = isMine ? 'my-message' : 'your-message';
    }
   ```
5. Now move the call of `addChatMessage()` into `getMessages()` and reload.
6. Now we need to figure out when a message is "mine" and when it is yours. In a 
   real chat app, you would log in with a specific user name. Here, we're going
   to compare it with the value of the usernameInput field.
7. You'll notice that this only works for new messages that you send and receive
   after setting the username field. Why?
8. Fortunately we have a "Login" button to simulate logging in. Click it and see
   how the display changes. Try changing the username.

## Extra credit

- [ ] Add message timestamps so you can see *when* messages have been sent (bonus points for something more descriptive than purely a date and time but "10 minutes ago" or "1 day ago")

## Background reading

* [HTML `textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
* Firebase reference
  * [Getting started (JavaScript)](https://firebase.google.com/docs/database/web/start)
  * [JavaScript API reference](https://firebase.google.com/docs/reference/js/)
* JavaScript language concepts
  * Scopes
    * [Everything you wanted to know about JavaScript Scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
    * [Demystifying JavaScript Variable Scope and Hoisting](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
  * Callbacks
    * [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* Web development (HTML, JS, CSS)
  * [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
