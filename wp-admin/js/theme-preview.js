var thickDims;jQuery(document).ready(function(a){thickDims=function(){var d=a("#TB_window"),c=a(window).height(),b=a(window).width();if(d.size()){d.width(b-90).height(c-60);a("#TB_iframeContent").width(b-90).height(c-90);d.css({"margin-left":"-"+parseInt(((b-90)/2),10)+"px"});if(typeof document.body.style.maxWidth!="undefined"){d.css({top:"30px","margin-top":"0"})}}return a("a.thickbox-preview").each(function(){var e=a(this).parents(".available-theme").find(".previewlink").attr("href");if(!e){return}e=e.replace(/&width=[0-9]+/g,"");e=e.replace(/&height=[0-9]+/g,"");a(this).attr("href",e+"&width="+(b-110)+"&height="+(c-100))})};thickDims().click(function(){var c=a(this).parents(".available-theme").find(".activatelink"),b=c.attr("href"),d=c.html();if(null==d){d=""}a("#TB_title").css({"background-color":"#222",color:"#cfcfcf"});a("#TB_closeAjaxWindow").css({"float":"left"});a("#TB_ajaxWindowTitle").css({"float":"right"}).append('&nbsp;<a href="'+b+'" target="_top" class="tb-theme-preview-link">'+d+"</a>");a("#TB_iframeContent").width("100%");return false});a(window).resize(function(){thickDims()})});function tb_position(){thickDims()};