
$(function(){
    let settings = {
        "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik?apitoken=vmnNRdc9FVrg5mf15m6fLyhser4SNa5P9GteU2WcAjOq2Tj4BuhJLBtAGeUQvyY6MRDfvqH7gqT4eSkrfNz9uZnYPy",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("apitoken")
        },
        'success': function(response){
            console.log(response)
            $('#table').append('<table>' + '<thead>' +'<tr>' + '<th>ID</th>'+ '<th>Ime i prezime</th>' + '<th>Email</th>'
                + '<th>Telefon</th>' + '<th>Lokacija</th>' + '<th>Uloga</th>'+ '<th>Broj dogadjaja</th>'+
                +'</tr>' + '</thead>' + '<tbody>'+ '</tbody>'+'</table>')
            response.forEach((element, index) => {
                $('tbody').append('<tr>' + '<td>' + element.id + '</td>' + '<td>' + element.imeprezime + '</td>' + '<td>' + element.email + '</td>' + '<td>' + element.telefon + '</td>' + '<td>' + '</td>' + '<td>' + '<a href="' + element.uloga.naziv + '.' + 'html' + '">' + element.uloga.naziv + '</td>' + '<td></td>' + '<td></td>' +' <td></td>' + '<td></td>' + '<td>' + '<button class="izmeni" data-id="' + element.id + '" data-imeiprezime="' + element.imePrezime + '" data-email="' + element.email
                    + '" data-telefon="' + element.telefon + '" data-uloganaziv="' + element.uloga.id + '"' + '>'
                    + 'Izmeni' + '</button>' + '<button class="obrisi" data-id="' + element.id + '" data-imeiprezime="'
                    + element.imeprezime + '" data-email="' + element.email +
                    '" data-telefon="' + element.telefon + '" data-uloganaziv="' + element.uloga.id + '"' + '>' + 'Obrisi' + '</button>' + '</td>' + '</tr>')
            })

            $('izmeni').on('click', function (e){
                localStorage.setItem('userid', $(this).attr('data-id'))
                localStorage.setItem('userName', $(this).attr('data-imeiprezime'))
                localStorage.setItem('useremail', $(this).attr('data-email'))
                localStorage.setItem('userphone', $(this).attr('data-telefon'))
                localStorage.setItem('userroleid', $(this).attr('data-uloganaziv'))
                window.location = 'korisnikid.html'
            })

            $('.obrisi').on('click', function (e){
                let form = new FormData();
                form.append("name", $(this).attr('data-imeiprezime'));
                form.append("email", $(this).attr('data-email'));
                form.append("phone", $(this).attr('data-telefon'));
                form.append("id", $(this).attr('data-id'));
                form.append("apitoken", $('meta[name="apitoken"]').attr('content'));

                let settings2 = {
                    "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik/?apitoken=" + $('meta[name="apitoken"]').attr('content'),
                    "method": "DELETE",
                    "timeout": 0,
                    "headers": {
                        "Accept": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("apitoken")
                    },
                    "processData": false,
                    "mimeType": "multipart/form-data",
                    "contentType": false,
                    "data": form,
                    "dataType": "json"
                };
                $.ajax(settings2).done(function(response){
                    console.log(response);
                });
            })
        },
        'error': function (response){
            console.log(response);
        }
    };
    $.ajax(settings)
})