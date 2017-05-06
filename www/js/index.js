// Fo an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener('backbutton', onBack.bind(this), false);
    document.getElementById('btnCalculate').addEventListener('click', onCalculate.bind(this), false);



    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onCalculate()
    {
        var x = document.getElementById('txt1').value;
        var y = document.getElementById('txt2').value;
        var o = parseInt(document.getElementById('op').value);
        if (x.length == 0 || y.length == 0)
            document.getElementById('res').innerHTML = 'ERROR: Please fill all the fields.';
        else {
            var a = parseInt(x);
            var b = parseInt(y);
            if (o == 0)
                document.getElementById('res').innerHTML = a + ' + ' + b + ' = ' + (a + b);
            else if (o == 1)
                document.getElementById('res').innerHTML = a + ' - ' + b + ' = ' + (a - b);
            else if (o == 2)
                document.getElementById('res').innerHTML = a + ' X ' + b + ' = ' + (a * b);
            else if (o == 3)
                if (b == 0)
                    document.getElementById('res').innerHTML = 'ERROR: Divisor cannot be 0.';
                else
                    document.getElementById('res').innerHTML = a + ' / ' + b + ' = ' + (a / b);
        }
    };
    function onBack()
    {
        var val = confirm('Are you sure want to exit?');
        if (val == true)
        {
            navigator.app.exitApp();
        }
    }


} )();