// A is the outer rim - 12 points starts top right
// B is the inner rim - 12 points
// C is the core - 1 point


window.onload = function () {
  var canvas = document.getElementById("pcs")
  var pcs_context = canvas.getContext("2d");

  const a = [];
  const b = [];
  const c = (305, 305);

  for (c=1) {
    a[c] = null;
    b[c] = null;
  }

  var r_players = [];
  var b_players = [];

  // load red players
  for (r=0; r<4; r++) {
    r_players[r] = {}
  }

  // load blue players
  for (b=0; b<4; r++) {
    b_players[b] = {}
  }
}
