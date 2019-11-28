$(document).ready(function(){
    $.getJSON('JSONbukalapak.json',
        function(data){
            for(var i = 0 ; i < data.Handphone.length; i++){
                $('.containerx').append
                ('<div class="card" style="width:200px;height:400px;display:inline-block;margin:30px;margin-top:20px;float:left;" >'
                +'<img src="'+data.Handphone[i].img+'"'+'class="card-img-top" style="height:190px;">'
                +'<div class="card-body">'
                +'<b>'+data.Handphone[i].Merk_HP +'</b>'
                + '<p>'+data.Handphone[i].Harga +'</p>'
                + '<div class="rating"><img src="assets/star.png" style ="width:16px; height:16px;" >'
                                        +'<img src="assets/star.png" style ="width:16px; height:16px;" >'
                                        +'<img src="assets/star.png" style ="width:16px; height:16px;" >'
                                        +'<img src="assets/star.png" style ="width:16px; height:16px;" >'
                                        +'<img src="assets/star.png" style ="width:16px; height:16px;" >'
                                        +'</div>'
                +'<a href="#"><div class="btn">Tambahkan Ke Keranjang</div></a>'+'</div></div>') 
            }
        });
        
});