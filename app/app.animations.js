'use strict';

angular.
  module('itemsApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
          if (className !== 'selected') return;

          element.css({
            display: 'block',
            opacity: .8,
            position: 'absolute',
            width: 0,
            height: 0,
            top: 200, //-500,
            left: 200 //0
          }).animate({
            width: 400,
            height: 400,
            top: 0,
            left:0,
            zIndex: 200
          }, 500, done);

      return function animateInEnd(wasCanceled) {
       // console.log('animateIN, wasCanceled?', wasCanceled);
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
     // if (className !== 'selected') return;

      element/*.css({
        
        position: 'absolute',
        top: 0,
        left: 0
        
      })*/.animate({
        opacity: 0,
        zIndex: 0
        //top: 500
      }, 300, done);

      return function animateOutEnd(wasCanceled) {
        //console.log('animateOUT, wasCanceled?', wasCanceled);
        if (wasCanceled) element.stop();
      };
    }
  });
