$(function(){

    $('#vreme_od_min_1').on('blur',function(){
        $('#vreme_do_sati_1').prop("disabled",false);
        $('#vreme_do_min_1').prop("disabled", false);
    })

    var radno_vreme = [];
    var radni_dan;
    var sati_od = 0;
    var sati_do = 0;
    $('#vreme_do_min_1').on('change', function(){

        radni_dan = $('#dan1').val() * 1;
        sati_od = $('#vreme_od_sati_1').val() * 60 + $('#vreme_od_min_1').val() * 1;

        sati_do = $('#vreme_do_sati_1').val() * 60 + $('#vreme_do_min_1').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })

    $('#vreme_od_min_2').on('blur',function(){
        $('#vreme_do_sati_2').prop("disabled",false);
        $('#vreme_do_min_2').prop("disabled", false);
    })

    $('#vreme_do_min_2').on('change', function(){

        radni_dan = $('#dan2').val() * 1;
        sati_od = $('#vreme_od_sati_2').val() * 60 + $('#vreme_od_min_2').val() * 1;

        sati_do = $('#vreme_do_sati_2').val() * 60 + $('#vreme_do_min_2').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })

    $('#vreme_od_min_3').on('blur',function(){
        $('#vreme_do_sati_3').prop("disabled",false);
        $('#vreme_do_min_3').prop("disabled", false);
    })

    $('#vreme_do_min_3').on('change', function(){

        radni_dan = $('#dan3').val() * 1;
        sati_od = $('#vreme_od_sati_3').val() * 60 + $('#vreme_od_min_3').val() * 1;

        sati_do = $('#vreme_do_sati_3').val() * 60 + $('#vreme_do_min_3').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })

    $('#vreme_od_min_4').on('blur',function(){
        $('#vreme_do_sati_4').prop("disabled",false);
        $('#vreme_do_min_4').prop("disabled", false);
    })

    $('#vreme_do_min_4').on('blur', function(){


        console.log($('#vreme_od_sati_4').val())
        console.log($('#vreme_od_sati_4').val() * 60 )
        console.log($('#vreme_od_min_4').val())

        radni_dan = $('#dan4').val() * 1;
        sati_od = $('#vreme_od_sati_4').val() * 60 + $('#vreme_od_min_4').val() * 1;

        sati_do = $('#vreme_do_sati_4').val() * 60 + $('#vreme_do_min_4').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })


    $('#vreme_od_min_5').on('blur',function(){
        $('#vreme_do_sati_5').prop("disabled",false);
        $('#vreme_do_min_5').prop("disabled", false);
    })

    $('#vreme_do_min_5').on('blur', function(){


        console.log($('#vreme_od_sati_5').val())
        console.log($('#vreme_od_sati_5').val() * 60 )
        console.log($('#vreme_od_min_5').val())

        radni_dan = $('#dan5').val() * 1;
        sati_od = $('#vreme_od_sati_5').val() * 60 + $('#vreme_od_min_5').val() * 1;

        sati_do = $('#vreme_do_sati_5').val() * 60 + $('#vreme_do_min_5').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })


    $('#vreme_od_min_6').on('blur',function(){
        $('#vreme_do_sati_6').prop("disabled",false);
        $('#vreme_do_min_6').prop("disabled", false);
    })

    $('#vreme_do_min_6').on('blur', function(){


        console.log($('#vreme_od_sati_6').val())
        console.log($('#vreme_od_sati_6').val() * 60 )
        console.log($('#vreme_od_min_6').val())

        radni_dan = $('#dan6').val() * 1;
        sati_od = $('#vreme_od_sati_6').val() * 60 + $('#vreme_od_min_6').val() * 1;
        sati_do = $('#vreme_do_sati6').val() * 60 + $('#vreme_do_min_6').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })

    $('#vreme_od_min_6').on('blur',function(){
        $('#vreme_do_sati_6').prop("disabled",false);
        $('#vreme_do_min_6').prop("disabled", false);
    })

    $('#vreme_do_min_7').on('blur', function(){


        console.log($('#vreme_od_sati_7').val())
        console.log($('#vreme_od_sati_7').val() * 60 )
        console.log($('#vreme_od_min_7').val())

        radni_dan = $('#dan7').val() * 1;
        sati_od = $('#vreme_od_sati_7').val() * 60 + $('#vreme_od_min_7').val() * 1;
        sati_do = $('#vreme_do_sati7').val() * 60 + $('#vreme_do_min_7').val() * 1;

        radno_vreme.push({
            "dan" : radni_dan,
            "od" : sati_od,
            "do" : sati_do
        })

        console.log(radno_vreme);

    })




    $('#forma').on('submit', function (e){
        e.preventDefault();

        var settings = {
            "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/lokacija",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('apitoken'),
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "name": $('#naziv').val(),
                "address": $('#adresa').val(),
                "city": $('#grad').val(),
                "description": $('#opis').val(),
                "workingHours": JSON.stringify(radno_vreme),
                "apitoken": $('meta[name="apitoken"]').attr('content'),
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    })
})