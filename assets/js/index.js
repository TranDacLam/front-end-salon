var jssor_1_slider_init = function() {
   var jssor_1_SlideshowTransitions = [
      {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
   ];

   var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
         $Class: $JssorSlideshowRunner$,
         $Transitions: jssor_1_SlideshowTransitions,
         $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
         $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
         $Class: $JssorThumbnailNavigator$,
         $Cols: 5,
         $SpacingX: 5,
         $SpacingY: 5,
         $Align: 390
      }
   };

   var jssor_1_slider = new $JssorSlider$("slider_container", jssor_1_options);

   /*#region responsive code begin*/
   var MAX_WIDTH = 682;
   function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;
      if (containerWidth) {
         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
         jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
         window.setTimeout(ScaleSlider, 30);
      }
   }

   ScaleSlider();

   $Jssor$.$AddEvent(window, "load", ScaleSlider);
   $Jssor$.$AddEvent(window, "resize", ScaleSlider);
   $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
   /*#endregion responsive code end*/
};

jssor_2_slider_init = function() {

   var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,o:-0.7}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
            ];

      var jssor_1_options = {
        $AutoPlay: 1,
        $SlideWidth: 720,
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $CaptionSliderOptions: {
          $Class: $JssorCaptionSlideo$,
          $Transitions: jssor_1_SlideoTransitions
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      if (navigator.userAgent.match(/iPhone|iPod|iPad|Android|Windows Phone|BlackBerry/i)) {
        jssor_1_options = {
              $AutoPlay: 1,
              $Idle: 2000,
              $SlideEasing: $Jease$.$InOutSine,
              $DragOrientation: 3,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

    }

      var jssor_1_slider = new $JssorSlider$("slider_container_bottom", jssor_1_options);

      /*#region responsive code begin*/

      var MAX_WIDTH = 3000;

      function ScaleSlider() {
          var containerElement = jssor_1_slider.$Elmt.parentNode;
          var containerWidth = containerElement.clientWidth;

          if (containerWidth) {

              var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

              jssor_1_slider.$ScaleWidth(expectedWidth);
          }
          else {
              window.setTimeout(ScaleSlider, 30);
          }
      }

      ScaleSlider();

      $Jssor$.$AddEvent(window, "load", ScaleSlider);
      $Jssor$.$AddEvent(window, "resize", ScaleSlider);
      $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
      /*#endregion responsive code end*/
  };

$(document).ready(function() {
   jssor_1_slider_init();
   jssor_2_slider_init();

   $('.salon-info-detail .item-color button').on('click', function(e){
      e.preventDefault();
      $('.salon-info-detail .item-color button').removeClass('color-active');
      $(this).addClass('color-active');
   });

   $('.salon-guide-bottom h3 a, .salon-check-guarantee-bottom h3 a').on('click', function(){
        if($(this).find('i').hasClass('fa-plus')){
           $(this).find('i').removeClass('fa-plus');
           $(this).find('i').addClass('fa-times');
        }else{
            $(this).find('i').removeClass('fa-times' );
           $(this).find('i').addClass('fa-plus');
        }
   });

});