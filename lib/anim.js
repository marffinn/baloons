TweenMax.staggerFrom(".is-one-quarter", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

$(".is-one-quarter").click(function(){
  TweenMax.staggerTo(".is-one-quarter", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
});

$(".logotype").click(function(){
  TweenMax.staggerTo(".is-one-quarter", 0.5, {opacity:1, y:0, ease:Back.easeIn}, 0.1);
});