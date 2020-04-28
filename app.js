$('.theme-switch input[type="checkbox"]').click(function(){
  $("body").toggleClass("dark-mode-background");
  $(".upper-info-card").toggleClass("upper-card-dark-mode-background");
  $(".followers-card").toggleClass("cards-dark-mode-background");
  $(".stats-card").toggleClass("cards-dark-mode-background");
  $(".card-title").toggleClass("text-dark-mode");
  $(".stats-number").toggleClass("text-dark-mode");
  $(".attribution").toggleClass("text-dark-mode");

});
