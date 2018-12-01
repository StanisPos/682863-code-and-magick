'use strict';

window.renderStatistics = function(ctx, names, times) {

  ctx.beginPath();

  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_DUSTANCE = COLUMN_WIDTH + 50;

  var startX = 100;
  var startY = 10;
  var x = startX;
  var y = startY;
  var cloudyWidth = 420;
  var cloudyHeight = 270;
  var step = 20;

  var getUpTopY = function() {
    x += step;
    y += step;
    return;
  };

  var getDownTopY = function() {
    x += step;
    y -= step;
    return;
  };

  var getUpBottomY = function() {
    x -= step;
    y += step;
  };

  var getDownBottomY = function() {
    x -= step;
    y -= step;
  };

  var getTopLine = function() {
    while(x <= cloudyWidth - step) {
      getUpTopY();
      ctx.lineTo(x, y);
      getDownTopY();
      ctx.lineTo(x, y);
    };
  };

  var getBottomLine = function() {
    while(x >= startX + step) {
      getDownBottomY();
      ctx.lineTo(x, y);
      getUpBottomY();
      ctx.lineTo(x, y);
    };
  };

  ctx.moveTo(x, y);
  ctx.fillStyle = 'white';

  getTopLine();

  if (x === cloudyWidth) {
    y = cloudyHeight - step;
    ctx.lineTo(x, y);
    getBottomLine();
  }

  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.shadowColor = 'transparent';

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', 170, 50);
  ctx.fillText('Список результатов:', 170, 70);

  console.log(names);
  console.log(times);
};
