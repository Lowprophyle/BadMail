const {
    remote
} = require('electron');
const ses = remote.getCurrentWebContents().session;
$(document).ready(function () {
    $('webview').hide();
    $('#web1').show();
    $("#link1").click(function () {
        $('#web1').show();
        $('#web2').hide();
        $('#web3').hide();
        $('#web4').hide();
        $('#web5').hide();
        $('#web6').hide();
        $('#web7').hide();
    });
    $("#link2").click(function () {
        $('#web2').show();
        $('#web1').hide();
        $('#web3').hide();
        $('#web4').hide();
        $('#web5').hide();
        $('#web6').hide();
        $('#web7').hide();
    });
    $("#link3").click(function () {
        $('#web3').show();
        $('#web1').hide();
        $('#web2').hide();
        $('#web4').hide();
        $('#web5').hide();
        $('#web6').hide();
        $('#web7').hide();
    });
    $("#link4").click(function () {
        $('#web4').show();
        $('#web1').hide();
        $('#web2').hide();
        $('#web3').hide();
        $('#web5').hide();
        $('#web6').hide();
        $('#web7').hide();
    });
    $("#link5").click(function () {
        $('#web5').show();
        $('#web1').hide();
        $('#web2').hide();
        $('#web3').hide();
        $('#web4').hide();
        $('#web6').hide();
        $('#web7').hide();
    });
    $("#link6").click(function () {
        $('#web6').show();
        $('#web1').hide();
        $('#web2').hide();
        $('#web3').hide();
        $('#web4').hide();
        $('#web5').hide();
        $('#web7').hide();
    });
    $("#link7").click(function () {
        $('#web7').show();
        $('#web1').hide();
        $('#web2').hide();
        $('#web3').hide();
        $('#web4').hide();
        $('#web5').hide();
        $('#web6').hide();
    });

    $('#clear').click(
        () => {
            console.log('data delete');
            if (confirm('Clears your cache', 'Are you sure?')) {
                ses.clearStorageData();
                ses.clearCache(() => {
                    ses.getCacheSize((size) => {
                        console.log(size);
                    });
                });
            }
        }
    );
});