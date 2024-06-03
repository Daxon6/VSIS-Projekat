
    $(function(){
        $('#imeprezime').on('blur', function() {
            let vrednost = $(this).val();
            let imeprezime = $('#provera_imeprezime');
            let sablon_imeprezime = /(?=^.{5,180}$)^[A-ЉЊШЂЧЋЖЏ][a-čćžđšљњшђчћжџ]+(?:[\s-][A-ЉЊШЂЧЋЖЏ][a-čćžđšљњшђчћжџ]+)+$|^[A-ZŠĐŽČĆ][a-zčćžđš]+(?:[\s-][A-ZŠĐŽČĆ][a-zčćžđš]+)+$/;

            if (sablon_imeprezime.test(vrednost)) {
                $(this).css('outline', 'none');
                imeprezime.hide();
            }
            else {
                $(this).css('outline', '3px solid orange');
                imeprezime.html("Ime i prezime nije pravilno napisano" + '<br><br>')
                imeprezime.show();
            }
        });



    $('#telefon').on('blur', function () {
        let vrednost = $(this).val();
        let telefon = $('#provera_telefon')
        let sablon_broj = /^[+][1-9][0-9][0-9]{7,12}$/;

        if (sablon_broj.test(vrednost) || $('#broj').val() === '') {
            $(this).css('outline', 'none');
            telefon.hide();
        }
        else {
            $(this).css('outline', '3px solid orange');
            telefon.html("Telefon nije ispravan" + '<br><br>')
            telefon.show();
        }
    });
        $('#email').on('blur', function () {
            if ($('#email').val() !=='') {
                $(this).css('outline', 'none');
                $('#provera_email').hide();
            }
        });
    $('#lozinka').on('blur', function () {
        let vrednost = $(this).val();
        let lozinka = $('#provera_lozinka')
        let sablon_lozinka = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,}$/;

        if (sablon_lozinka.test(vrednost)) {
            $(this).css('outline', 'none');
            lozinka.hide();
        }
        else {
            $(this).css('outline', '3px solid orange');
            lozinka.html("Lozinka nije dovoljno jaka" + '<br><br>')
            lozinka.show();
        }
    });

    $('#ponovljenalozinka').on('blur', function () {
        let ponovnalozinka = $('#ponovljenalozinka')
        let ponovljenalozinka = $('#provera_ponovljenalozinka')
        let lozinka = $('#lozinka')

        if (ponovnalozinka.val() === lozinka.val()) {
            $(this).css('outline', 'none');
        }
        else {
            $(this).css('outline', '3px solid orange');
            ponovljenalozinka.html("Lozinke se ne poklapaju" + '<br><br>')
            ponovljenalozinka.show();
        }
    });

    $('#forma').on('submit', function (e) {
        e.preventDefault();
        let email = $('#email');
        let provera_email = $('#provera_email');
        let greska = $('#provera_registracija');

        if (email.val() === '') {
            email.css('outline', '3px solid orange');
            provera_email.html("Niste uneli email adresu" + '<br><br>')
            provera_email.show();
            console.log(provera_email);
        }

        let form = new FormData();
        form.append("name", $('#imeprezime').val());
        form.append("email", email.val());
        form.append("phone", $('#telefon').val());
        form.append("password", $('#lozinka').val());
        form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

        let settings = {
            "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json"
            },
            "processData": false,
            "mimeType": "mulipart/form-data",
            "contentType": false,
            "data": form,
            "dataType": 'json',
            'success': function(response){
                if(response.error !== undefined){
                    greska.html(response.error);
                    greska.show();
                    $('#email').val('');
                    console.log(greska.show());
                }
                else {
                    window.location = 'prijava.html';
                }
            },
            'error': function(response){
                greska.html(response.error);
                greska.show();
                $('#email').val('');
            }
        };
        console.log(greska)
        $.ajax(settings);
    })
});
