

$(function(){
    $('#forma').on('submit', function (e) {
        e.preventDefault();
        let greska = $('#provera_registracija');
        let form = new FormData();
        form.append("email", $('#email').val());
        form.append("password", $('#lozinka').val());
        form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

        let settings = {
            "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json"
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form,
            "dataType": "json",
            "success": function(response){
                if(response.error !== undefined){
                    greska.html(response.responseJSON.error);
                    greska.show();
                    $('#lozinka').val('');
                }
                else {
                    console.log(response);
                    localStorage.setItem('apitoken', response.apitoken);
                    localStorage.setItem('type', response.type);
                    if(localStorage.getItem("type") === 'administrator'){
                        window.location = 'administrator.html';
                    }
                    else if(localStorage.getItem("type") === 'blagajnik'){
                        window.location = 'blagajnik.html';
                    }
                    else if(localStorage.getItem("type") === 'registrovani korisnik'){
                        window.location = 'korisnik.html'; 
                    }
                }
            },
            'error': function(response){
                greska.html(response.responseJSON.error);
                greska.show();
                $('#lozinka').val('');
            }
        };
        $.ajax(settings);
    })
});