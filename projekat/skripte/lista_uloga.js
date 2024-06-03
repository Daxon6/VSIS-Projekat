$(function(){
    let lista_korisnika = {
        "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik?apitoken=" + $('meta[name="apitoken"]').attr('content'),
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("apitoken")
        },
    };
    let administrator = 0;
    let blagajnik = 0;
    let registrovani_korisnik = 0;
    let blokirani_korisnik = 0;
    $.ajax(lista_korisnika).done(function(response){
        response.forEach((element, index) =>{
            if(element.uloga.id === 1){
                administrator++;
            }
            else if(element.uloga.id === 2){
                blagajnik++;
            }
            else if(element.uloga.id === 3){
                registrovani_korisnik++;
            }
            else if(element.uloga.id === 4){
                blokirani_korisnik++;
            }
        });
        $('table>tbody>tr:first-of-type>td:last-of-type').append(administrator)
        $('table>tbody>tr:nth-of-type(2)>td:last-of-type').append(blagajnik)
        $('table>tbody>tr:nth-of-type(3)>td:last-of-type').append(registrovani_korisnik)
        $('table>tbody>tr:nth-of-type(4)>td:last-of-type').append(blokirani_korisnik)
    });
    let settings = {
        "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/uloga?apitoken=" + $('meta[name="apitoken"]').attr('content'),
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    };
    $.ajax(settings).done(function (response){
        console.log(response);
        $('body').append('<table>' + '<thead>' +'<tr>' + '<th>ID</th>'+ '<th>Naziv</th>' + '<th>Opis</th>' + '<th>Broj elemenata</th>' + '</tr>' + '</thead>' + '<tbody>'+ '</tbody>'+'</table>')
        response.forEach((element, index) =>{
            $('tbody').append('<tr>' +'<td>' + element.id + '</td>' +  '<td>' + element.naziv + '</td>' +  '<td>' + element.opis +  '</td>'+ '<td>' +  '</td>'+'</tr>')
        })
    });
})