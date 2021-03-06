// Example using HTTP POST operation

"use strict";
var page = require('webpage').create(),
    server = 'http://ptsv2.com/t/phantomjs-toilet/post',
    data = '{"universe": "expanding", "answer": 42}';

var headers = {
    "Content-Type": "application/json"
}

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
