// A is the outer rim - 12 points > starts top right and
// B is the inner rim - 12 points > continues clockwise
// C is the core - 1 point

document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded(){
	
	const sock = io();

  var canvas = document.getElementById("pcs")
  var pcs_context = canvas.getContext("2d");

  const radA = 235;
  const radB = 140;
  var a = [];
  var b = [];
  const core = [305, 305];

  const deg = Math.PI/180

  for (c=1; c<=12; c++) {
    var angle = -deg*c*30 - (deg*-195)

    var a_x = 305 + (radA * Math.sin(angle));
    var a_y = 305 + (radA * Math.cos(angle));
    var b_x = 305 + (radB * Math.sin(angle));
    var b_y = 305 + (radB * Math.cos(angle));

    a[c] = {x: a_x, y: a_y};
    b[c] = {x: b_x, y: b_y};

  }
  //
  // pcs_context.fillRect(a[1].x, a[1].y, 3,3);
  // pcs_context.fillRect(b[3].x, b[3].y, 3,3);

  var r_players = [];
  var b_players = [];

  // load red players
  for (r_i=0; r_i<4; r_i++) {
    r_players[r_i] = {}
  }

  // load blue players
  for (b_i=0; b_i<4; b_i++) {
    b_players[b] = {}
  }
}
