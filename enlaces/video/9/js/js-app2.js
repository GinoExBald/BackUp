+function($,window){var sideNav={};sideNav.init=function(){$('.side-nav .side-nav-menu li a').on('click',function(e){if($(this).parent().hasClass("open")){$(this).parent().children('.dropdown-menu').slideUp(200,function(){$(this).parent().removeClass("open");});}else{$(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);$(this).parent().parent().children('li.open').children('a').removeClass('open');$(this).parent().parent().children('li.open').removeClass("open");$(this).parent().children('.dropdown-menu').slideDown(200,function(){$(this).parent().addClass("open");});}});$('.sidenav-fold-toggler').on('click',function(e){$('.app').toggleClass("side-nav-folded");e.preventDefault();});$('.sidenav-expand-toggler').on('click',function(e){if($('.side-nav-backdrop').length){$('.side-nav-backdrop').remove();}
else{var sideNavBackdrop='<div class="side-nav-backdrop"></div>';$('.app').append(sideNavBackdrop);}
$('.app').toggleClass("side-nav-expand");e.stopPropagation();$('.side-nav-backdrop').on('click',function(e){$('.app').removeClass('side-nav-expand');$(this).remove();});});};window.sideNav=sideNav;}(jQuery,window);+function($,window){var header={};header.init=function(){$(".search-toggle").on("click",function(e){$(".search-box, .search-input, .logo-mobile").toggleClass("active"),$(".search-input input").focus(),e.preventDefault()})};window.header=header;}(jQuery,window);+function($){sideNav.init();header.init();}(jQuery);