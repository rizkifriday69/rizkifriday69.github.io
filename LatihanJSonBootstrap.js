$(document).ready(function(){
    $.getJSON('JSONNaruto.json',
        function(x){
            for (var y = 0; y < x.Naruto.length; y++) {
                $('#blog').append(
                    '<div class="blog-post">'+
                    '<h2 class="blog-post-title">'+x.Naruto[y].Judul+'</h2>'+
                    '<img src="'+x.Naruto[y].Gambar+'" width="500px" alt="">'+
                    '<p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>'+x.Naruto[y].Artikel+
                    '<a href="#" class="stretched-link">Lanjutkan Membaca</a></div>'
                    
                )
                
            }
            $('#blog').append(
                '<nav class="blog-pagination">'+
                '<a class="btn btn-outline-primary" href="#">Next</a>'+
                '<a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Prev</a>'+
                '</nav>'+
                '<img src="assets/Images/animasi1.gif">'
            )
        }
    )
})