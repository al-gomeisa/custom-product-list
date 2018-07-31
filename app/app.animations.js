'use strict';

angular.
  module('itemsApp').
  animation('.itemTEST', function itemAnimationFactory() {
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
            top: 200,
            left: 200
          }).animate({
            
            width: 200,
            height: 200,
            
            top: 0,
            left:0,
            zIndex: 200
          }, 500, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      element.animate({
        opacity: 0,
        zIndex: 0
      }, 300, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });

angular.
  module('itemsApp').
  animation('.item-details, item', function itemAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
          if (className !== 'selected') return;

          element.css({
            display: 'block',
            width: 0,
            height: 0,
          }).animate({
            opacity: .8,
            width: 500,
            height: 500,
            zIndex: 200
          }, 500, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {

      element.animate({
        opacity: 0,
        zIndex: 0
        //top: 50
      }, 300, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
