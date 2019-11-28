


$(document).ready(function () {
    $.getJSON('Youtube.json',
        function (data) {
            for (var i = 0; i < 5; i++) {
                $('#xxx').append
                    ('<div id="judul' + i + '"><div class="media">'
                        + '<div class="media-left"><a target="iframe" href="https://www.youtube.com/embed/' + data.youtube[i].link + '">'
                        + '<img src="' + data.youtube[i].tumbnail + '">' + '<span class="duration">17:30</span></a></div>'
                        + '<div class="media-body">'
                        + '<a target="iframe" href="https://www.youtube.com/embed/' + data.youtube[i].link + '">'
                        + '<h5 id="judul">' + data.youtube[i].judul + '</h5></a>'
                        + '<div class="row m0 meta_info views">10.000.000x ditonton</div>'
                        + '</div>'
                        + '</div></div>')

            }

            // for (var x = 0; x < 5; x++) {
            //     $('"#judul'+x+'"').click(function(){
            //         $("#judul").html(data.youtube[x].judul);
            //     })
            // }

            $("#judul0").click(function () {
                $("#judul").html("Ambyarrr!!! Prank di nikahan orang!!!");
            })
            $("#judul1").click(function () {
                $("#judul").html("Awalnya Sombong Banget, Ngamen Suara gagu Sampe Diusirr!!!");
            })
            $("#judul2").click(function () {
                $("#judul").html("Godain Anak Sma Lagi Belajar!! Bibit Unggul Masa Depan");
            })
            $("#judul3").click(function () {
                $("#judul").html("Awalnya Diusir,,UHKTI ini Akhirnya Baper..");
            })
            $("#judul4").click(function () {
                $("#judul").html("Awalnya Jutek Banget, AKhirnya Auto Klepek-Klepek.");
            })
            $("#judul5").click(function () {
                $("#judul").html("Ngebaperin Kembaran Nella Karisma..");
            })

            for (var x = 0; x < 4; x++) {
                $("#menu").append(
                    '<div class="col-sm-3">' +
                    '<div class="row inner m0">'+
                        '<div class="preview_img" style="color:white;">'+
                            '<img src="'+data.youtube[x].tumbnail+'" alt="" class="preview">'+
                                '<a target="iframe" href="'+data.youtube[x].link +'" class="play-btn"></a></div>'+
                            '<div class="title_row row m0"><a href="'+data.youtube[i].link +'">'+data.youtube[x].judul+'</a></div>'+
                        '</div>'+
                    '</div>'
                )
                
            }
        });
    $.getJSON('Youtube.json',
        function (data) {
            for (var i = 6; i < data.youtube.length; i++) {
                $('#yyy').append
                    ('<div id="judul' + i + '"><div class="media">'
                        + '<div class="media-left"><a target="iframe" href="https://www.youtube.com/embed/' + data.youtube[i].link + '">'
                        + '<img src="' + data.youtube[i].tumbnail + '">' + '<span class="duration">17:30</span></a></div>'
                        + '<div class="media-body">'
                        + '<a target="iframe" href="' + data.youtube[i].link + '">'
                        + '<h5 id="judul">' + data.youtube[i].judul + '</h5></a>'
                        + '<div class="row m0 meta_info views">10.000.000x ditonton</div>'
                        + '<a href="#" onclick="klik(https:www.youtube.com/embed/' + data.youtube[i].judul + ')" ></a> </div>'
                        + '</div></div>')
            } 
            $("#judul6").click(function () {
                $("#judul").html("BELI MOBIL PAKE DUIT 2000 AN - PASUKAN BAR BAR NGE RUSUH DI SHOWROOM MOBIL HONDA TUGU JOGJA !!!");
            })
            $("#judul7").click(function () {
                $("#judul").html("GODAIN CEWEK JUDES BANGET !!! MAHASISWI CANTIK AKHIRNYA BAPER JUGA");
            })
            $("#judul8").click(function () {
                $("#judul").html("UDAH NYAMANN!! EHH MALAH KABUURRR!!!");
            })
            $("#judul9").click(function () {
                $("#judul").html("KETAHUAN !!! PRANK NYANYI GAGU DI ALUN-ALUN JOGJA");
            })
            $("#judul10").click(function () {
                $("#judul").html("PRANK AWALNYA GAGU BERAKSI BARENG ANGGA CHANDRA !!! COWOK NYA EMOSI");
            })
            $("#judul11").click(function () {
                $("#judul").html("DI PRANK KAKAK CANTIK - DI BIKIN MALU SAMA HASANJR11 - AUTO DI BULLY");
            })
            $("#judul12").click(function () {
                $("#judul").html("TAMU PADA HERAN !!! NYANYI HARUS NYA AKU DI NIKAHAN ORANG");
            })
            $("#judul13").click(function () {
                $("#judul").html("ANJAYYYY !!! GILAA EMOSI SATU CAFE LIAT NYA - TAPI LIHAT ENDING NYA ADA YANG BAPER");
            })
            $("#judul14").click(function () {
                $("#judul").html("DI BIKIN EMOSI SATU CAFE - NYANYI FALS TAPI LIHAT ENDING NYA");
            })


        });
 
});



