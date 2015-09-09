$(window).load(function()
{
    centerContent();
});

$(window).resize(function()
{
    centerContent();
});

function centerContent(index, value)
{
  var container = $('.container');
  var ids = ["#head", "#cabout", "#cresume", "#ccontact"];
  for (var i = 0; i < ids.length; i++){
    var v = $(ids[i])
    v.css("left", ((container.width()-v.width())/2)+"px");
    v.css("top", ((container.height()-v.height())/2)+"px");
  }
}
