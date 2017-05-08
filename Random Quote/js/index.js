$(document).ready(function(){
  var qlist = [ 
      '"Whatever you lose, you will find it again. But what you throw away you will never get back."  - Kenshin'
      ,'"The world is cruel, but also very beautiful."  - Mikasa'
      ,'"You cannot judge how beautiful a girl really is by the way she looks." - Usagi'
      ,'"A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return."  - Edward Elric'
      ,'"People die if they are killed."  - Shirou.'
      ,'"Yet those hand will never hold anything."  - Emiya'
      ,'"If you’re not remembered, then you never existed." - Lain'
      ,'"Giving up is what kills people." - Alucard'
    ];

  $("#genquote").on("click", function(){
    var quoteQ = qlist.length;
    var index = Math.floor((Math.random() * quoteQ) + 1)-1;
    var quote = qlist[index];
    $("#newQuote").hide();
    $("#quote").html(quote);
    $('#twitter').show();
    var twitterURL = 'https://twitter.com/intent/tweet?hashtags=animequote&text=\"' + quote + '"';
    $('#twitter').attr('href', twitterURL);
});
  
this.displayIntro();
$('#twitterQuote').hide(); 
});