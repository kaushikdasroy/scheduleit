var cronofy = require('cronofy');

var options = {
    access_token: 'DpRBxorHuwWd_VGQE5iOyvqKvttSpIRh',
    from: '2016-05-01',
    to: '2016-05-10',
    tzid: 'Etc/UTC'
};

cronofy.readEvents(options)
    .then(function (response) {
        //var events = response.events;
        console.log(response)
    });