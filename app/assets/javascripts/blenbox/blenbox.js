//= require dragdealer
//= require jquery-1.9.1

$(function() {

  window.onload = function() {
    // Magnifier
    var mask = document.getElementById('grade');
    var content = document.getElementById('grid_container');
    var semana = document.getElementById('grade_semana');
    var list = document.getElementsByClassName("grade-semana");
    new Dragdealer('horizontal', {
      steps: 10,
      snap: true,
      animationCallback: function(x, y)
      {
        var marginx = x * (15840 - 1584);
        $("#grid_container").animate({
          marginLeft: String(-marginx) + 'px'
        }, 400 );
      }
    });
    new Dragdealer('vertical', {
      steps: 7,
      snap: true,
      animationCallback: function(x, y) {
        var marginy = y * (20160 - 2880);
        for (var i = 0; i < list.length; i++) {
          $(list[i]).animate({
            marginTop: String(-marginy) + 'px'
          }, 400 );
        }
      }
    });
  }
  $( "#draggable" ).draggable({ scroll: true, scrollSpeed: 100 });
});
