function VoiceStackIframe(t){function i(){!function(){var t=function(){window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||jQuery.voiceStackPopupSlideOut(o),window.navigator.userAgent.match(/iPhone/i)&&window.navigator.userAgent.match(/iPad/i)&&(jQuery(".frontend-tab-container").css("display: none;"),jQuery(".frontend-tab-container-side").css("display: none;"))};window.addEventListener?window.addEventListener("load",t):window.attachEvent("onload",t)}()}if("ifrm"===t){var e=document.getElementById(t).src,o=[];o.tabwidth="460",o.mainPosition="fixed",e.indexOf("side-widget")>=0?o.position="right":e.indexOf("footer-widget")>=0&&(o.position="bottom_right"),i()}}if(window.jQuery){if("1.2.6"===jQuery.fn.jquery){var script=document.createElement("script");script.type="text/javascript",script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(script)}}else{var script=document.createElement("script");script.type="text/javascript",script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(script)}document.write("<style> .frontend-widget-preview { position:absolute; top:0; left:0; display:inline-block; width:100%; height:100%; z-index:100; border-color: transparent!important; } #ifrm, #widget-preview { border: none; margin-bottom: 0!important; } .slide-out-div-new p { margin-bottom: 0!important; } .slide-out-div-new, #widget-preview { max-width: 100%; } .frontend-tab-container-side { max-width: inherit; } #widget-preview { z-index: 1000; position: relative; } #ifrm { z-index: 100; } </style>"),function(){var t=function(){function t(t,i,e,o){"use strict";var n=(e("html"),e(t),e(i)),a=e.voiceStackPopup=function(i,e,o,n){e=e||0,o=o||0,t.livePreview=o,n=n||0,t.floatingWidget=n,a.open.apply(this,arguments),0!=e&&setTimeout(a.close,e)};e.voiceStackPopupSlideOut=function(o){var a;a="fixed"===o.mainPosition?!0:!1;var r={tabHandle:".handle",speed:300,tabWidth:o.tabwidth,action:"click",tabLocation:o.position,topPos:"120px",leftPos:"20px",fixedPosition:a,positioning:"absolute",pathToTabImage:o.image,imageHeight:"100px",imageWidth:"50px",textColor:o.textColor,imgRepeat:o.repeat,tabBgColor:o.tabBgColor,onLoadSlideOut:!1};r.tabHandle=e(r.tabHandle);var s=e(".slide-out-div");if(r.fixedPosition===!0?r.positioning="fixed":r.positioning="absolute",!i.all||t.opera||t.XMLHttpRequest||(r.positioning="absolute"),null!=r.pathToTabImage){var d=0;0===r.imgRepeat?d="no-repeat":1===r.imgRepeat&&(d="repeat"),"0"!==r.pathToTabImage?r.tabHandle.css({"background-image":"url("+r.pathToTabImage+")","background-repeat":d,"background-size":"100%",padding:"5px","font-weight":"bold","font-size":"16px","text-decoration":"none",border:"none","min-width":r.imageWidth,"min-height":r.imageHeight}):r.tabHandle.css({border:"none",padding:"10px",width:"auto",height:"auto","font-weight":"bold","font-size":"16px","text-decoration":"none"})}r.tabHandle.css({display:"block",color:r.textColor,"background-color":r.tabBgColor,outline:"none",position:"absolute"}),s.css({"line-height":"1","z-index":9999,position:r.positioning});var p={containerWidth:parseInt(s.outerWidth()+1,10)+"px",containerHeight:parseInt(s.outerHeight()+1,10)+"px",tabWidth:parseInt(r.tabHandle.outerWidth()+1,10)+"px",tabHeight:parseInt(r.tabHandle.outerHeight()+1,10)+"px"};if(r.tabWidth&&0!=r.tabWidth&&("absolute"===r.positioning?(p.containerWidth=parseInt(.5*r.tabWidth,10)+"px",p.containerWidthZoom=parseInt(.25*r.tabWidth,10)+"px",p.containerWidthRightZoom=parseInt(.25*r.tabWidth,10)+"px"):(e(t).width()>parseInt(r.tabWidth,10)?p.containerWidth=parseInt(r.tabWidth,10)+"px":p.containerWidth=e(t).width()+"px",p.containerWidthZoom=parseInt(r.tabWidth,10)+"px",p.containerWidthRightZoom=0)),s.css({width:p.containerWidth}),e(".slide-out-div iframe").on("load",function(){"absolute"===r.positioning&&s.find("iframe").outerHeight()>600&&s.find("iframe").css({height:"600px","overflow-y":"scroll"})}),"bottom_left"===r.tabLocation&&e(".slide-out-div iframe").on("load",function(){"fixed"===r.positioning&&s.find("iframe").outerHeight()>700&&s.find("iframe").css({height:"700px","overflow-y":"scroll"}),s.css({bottom:"-"+parseInt(s.outerHeight(),10)+"px",position:r.positioning,left:0}),r.tabHandle.css({top:"-"+p.tabHeight,left:0})}),"bottom_middle"===r.tabLocation){var c;"fixed"===r.positioning?c=(parseInt(n.width(),10)-parseInt(r.tabHandle.outerWidth(),10))/2:"absolute"===r.positioning&&(c=(parseInt(e("#ipsw-preview-content").width(),10)-parseInt(r.tabHandle.outerWidth(),10))/2),e(".slide-out-div iframe").on("load",function(){"fixed"===r.positioning&&s.find("iframe").outerHeight()>700&&s.find("iframe").css({height:"700px","overflow-y":"scroll"}),s.css({bottom:"-"+parseInt(s.outerHeight(),10)+"px",position:r.positioning,left:parseInt(c,10)+"px"}),r.tabHandle.css({top:"-"+p.tabHeight,left:0})})}"bottom_right"===r.tabLocation&&("fixed"===r.positioning&&s.find("iframe").outerHeight()>700&&s.find("iframe").css({height:"700px","overflow-y":"scroll"}),s.css({bottom:"-"+parseInt(s.outerHeight(),10)+"px",position:r.positioning,right:"50px"}),r.tabHandle.css({top:"-"+p.tabHeight,right:0}),e("#ifrm").css({visibility:"visible"}),e("#widget-preview").css({visibility:"visible"}),e("body").append("<style>@media only screen and (max-width:459px) { .slide-out-div-new { right: 0px!important; } } </style>"));var l=r.tabHandle.outerWidth();"left"===r.tabLocation&&e(".slide-out-div iframe").on("load",function(){"absolute"===r.positioning&&s.find("iframe").outerHeight()>600&&s.find("iframe").css({height:"600px","overflow-y":"scroll"}),s.css({left:"-"+p.containerWidthZoom}),r.tabHandle.css({right:"-"+l+"px"})}),"right"===r.tabLocation&&("absolute"===r.positioning&&s.find("iframe").outerHeight()>600&&s.find("iframe").css({height:"600px","overflow-y":"scroll"}),s.css({right:"-"+p.containerWidth,height:"auto",top:"initial",bottom:"50px"}),r.tabHandle.css({left:"-"+l+"px",bottom:"0px"}),e("html").css("overflow-x","hidden"),e("#ifrm").css({visibility:"visible"}),e("#widget-preview").css({visibility:"visible"})),r.tabHandle.click(function(t){t.preventDefault()});var h=function(){"top"===r.tabLocation?s.animate({top:"-"+p.containerHeight},r.speed).removeClass("open"):"left"===r.tabLocation?s.animate({left:"-"+p.containerWidthZoom},r.speed).removeClass("open"):"right"===r.tabLocation?s.animate({right:"-"+p.containerWidth},r.speed).removeClass("open"):"bottom_left"===r.tabLocation?s.animate({bottom:"-"+parseInt(s.outerHeight(),10)+"px"},r.speed).removeClass("open"):"bottom_middle"===r.tabLocation?s.animate({bottom:"-"+parseInt(s.outerHeight(),10)+"px"},r.speed).removeClass("open"):"bottom_right"===r.tabLocation&&s.animate({bottom:"-"+parseInt(s.outerHeight(),10)+"px"},r.speed).removeClass("open")},o=function(){"absolute"===r.positioning?p.containerWidthBottomZoom=parseInt(.5*s.outerHeight(),10)+"px":p.containerWidthBottomZoom="3px","top"==r.tabLocation?s.animate({top:"-3px"},r.speed).addClass("open"):"left"==r.tabLocation?s.animate({left:"0"},r.speed).addClass("open"):"right"==r.tabLocation?s.animate({right:"-"+p.containerWidthRightZoom},r.speed).addClass("open"):"bottom_left"==r.tabLocation?s.animate({bottom:"-"+p.containerWidthBottomZoom},r.speed).addClass("open"):"bottom_middle"==r.tabLocation?s.animate({bottom:"-"+p.containerWidthBottomZoom},r.speed).addClass("open"):"bottom_right"==r.tabLocation&&s.animate({bottom:"-"+p.containerWidthBottomZoom},r.speed).addClass("open")},m=function(){s.click(function(t){t.stopPropagation()}),e(i).click(function(){h()})},g=function(){r.tabHandle.click(function(t){s.hasClass("open")?h():o()}),m()},b=function(){s.hover(function(){o()},function(){h()}),r.tabHandle.click(function(t){s.hasClass("open")&&h()}),m()},u=function(){h(),setTimeout(o,500)};"click"===r.action&&g(),"hover"===r.action&&b(),r.onLoadSlideOut&&u()}}if(window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i))$(".slide-out-div-new").hide();else{if(0===jQuery("#ifrm").length)var i=jQuery("#ifrm_button").attr("src");else var i=jQuery("#ifrm").attr("src");i=i.split("/");var e=i[i.length-1],o=i[0]+"//"+i[2];jQuery(".frontend-tab-container").on("click",function(){jQuery.post(o+"/add-click",{widget_token:e})}),jQuery(".frontend-tab-container-side").on("click",function(){jQuery.post(o+"/add-click",{widget_token:e})}),t(window,document,jQuery)}};window.addEventListener?window.addEventListener("load",t):window.attachEvent("onload",t)}();