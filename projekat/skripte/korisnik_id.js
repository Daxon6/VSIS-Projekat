$(function() {
    $('#imeprezime').on('blur', function () {
        let vrednost = $(this).val();
        let imeprezime = $('#provera_imeprezime');
        let sablon_imeprezime = /(?=^.{5,180}$)^[A-ЉЊШЂЧЋЖЏ][a-čćžđšљњшђчћжџ]+(?:[\s-][A-ЉЊШЂЧЋЖЏ][a-čćžđšљњшђчћжџ]+)+$|^[A-ZŠĐŽČĆ][a-zčćžđš]+(?:[\s-][A-ZŠĐŽČĆ][a-zčćžđš]+)+$/;

        if (sablon_imeprezime.test(vrednost)) {
            $(this).css('outline', 'none');
            imeprezime.hide();
        } else {
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
        } else {
            $(this).css('outline', '3px solid orange');
            telefon.html("Telefon nije ispravan" + '<br><br>')
            telefon.show();
        }
    });
    $('#email').on('blur', function () {
        if ($('#email').val() !== '') {
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
        } else {
            $(this).css('outline', '3px solid orange');
            lozinka.html("Lozinka nije dovoljno jaka" + '<br><br>')
            lozinka.show();
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
        $('#uloge').on('change', function () {

            if ($('#uloge').val() === $('#blagajnik').val()) {
                $('#lokacije').show();
            } else {
                $('#lokacije').hide();
            }
        });

        let lista_uloga = {
            "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/uloga?apitoken=" + $('meta[name="apitoken"]').attr('content'),
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("apitoken")
            },
        };

        $.ajax(lista_uloga).done(function (response) {
            response.forEach((element, niz) => {
                $('#uloge').append('<option value="' + element.id + '">' + element.naziv + '</option>')
            })
        });

        let lista_lokacija = {
            "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/lokacija?apitoken=" + $('meta[name="apitoken"]').attr('content'),
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("apitoken")
            },
        };

        $.ajax(lista_lokacija).done(function (response) {
            console.log(response);
            response.forEach((element, niz) => {
                $('#lokacije').append('<option value="' + element.id + '">' + element.naziv + '</option>')
            })
            $('#uloge').on('change', function () {

                if ($(this).val() === '2') {
                    $('#lokacije').show();
                } else {
                    $('#lokacije').hide();
                }
            });
            let settings = {
                "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik?apitoken=" + $('meta[name="apitoken"]').attr('content'),
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("apitoken")
                },
                'dataType': "json",
                'success': function (response) {
                    $('#id').val(localStorage.getItem('userid'))
                    $('#imeprezime').val(localStorage.getItem('userName'))
                    $('#broj').val(localStorage.getItem('userphone'))
                    $('#email').val(localStorage.getItem('useremail'))
                    $('#uloge').val(localStorage.getItem('userroleid'))
                    console.log(response)
                },
                'error': function (response) {
                    console.log(response);
                }
            };

            $.ajax(settings)
            $('#forma').on('submit', function (e) {
                e.preventDefault();
                let settings2 = {
                    "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik/" + localStorage.getItem('userid'),
                    "method": "PATCH",
                    "timeout": 0,
                    "headers": {
                        "Accept": "application/json",
                        "Authorization": "Bearer" + localStorage.getItem("apitoken"),
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    "data": {
                        "name": $('#imeprezime').val(),
                        "email": $('#email').val(),
                        "phone": $('#broj').val(),
                        "password": $('#lozinka').val(),
                        "userRoleId": $('#uloge').val(),
                        "locationId": $('#lokacije').val(),
                        "apitoken": $('meta[name="apitoken"]').attr('content')
                    },
                    "dataType": "json",
                    'success': function (response) {
                        console.log(response);
                    },
                    'error': function (response) {
                        console.log(response);
                    }
                };
                $.ajax(settings2)
            });
        })
    })
})
