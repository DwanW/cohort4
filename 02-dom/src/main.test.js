test('displays a user after a click', () => {
    // Set up our document body
    document.body.innerHTML =
    '<div id="body-container" class="container">' +
        '<h1>Basic DOM</h1>' +
        '<div class="list-section">' +
            '<div>This is a list of stuff</div>' +
            '<ol id="list">' +
                '<li>item 1</li>' +
                '<li>item 2</li>' +
                '<li>item 3</li>' +
            '</ol>' +
        '</div>' +
        '<button id="show">Show</button>' +
        '<button id="add">Add</button>' +
        '<button id="add-start">Add start</button>' +
        '<button id="remove">Remove</button>' +
        '<button id="remove-end">Remove end</button>' +
    '</div>';
  
    //emulate a click on our button
    document.getElementById('show').click();
  
    // Assert that the fetchCurrentUser function was called, and that the
    // #username span's inner text was updated as we'd expect it to.
    expect($('#username').text()).toEqual('Johnny Cash - Logged In');
  });