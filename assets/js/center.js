$(window).load(function()
{
    centerContent();
});

$(window).resize(function()
{
    centerContent();
});

function centerContent()
{
  var container = $('.container');
  var content = $('.content');
  content.css("left", (container.width()-content.width())/2);
  content.css("top", (container.height()-content.height())/2);
}
