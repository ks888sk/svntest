(function(b){function a(i,l,g){var n=1,k=2,e=3,d=4,f=5,j=0,m,h;if((i!=g)&&g.length>0){return f}if(i.length<4){return n}if(i.toLowerCase()==l.toLowerCase()){return k}if(i.match(/[0-9]/)){j+=10}if(i.match(/[a-z]/)){j+=26}if(i.match(/[A-Z]/)){j+=26}if(i.match(/[^a-zA-Z0-9]/)){j+=31}m=Math.log(Math.pow(j,i.length));h=m/Math.LN2;if(h<40){return k}if(h<56){return e}return d}function c(){var f=b("#pass1").val(),e=b("#user_login").val(),d=b("#pass2").val(),g;b("#pass-strength-result").removeClass("short bad good strong");if(!f){b("#pass-strength-result").html(pwsL10n.empty);return}g=a(f,e,d);switch(g){case 2:b("#pass-strength-result").addClass("bad").html(pwsL10n.bad);break;case 3:b("#pass-strength-result").addClass("good").html(pwsL10n.good);break;case 4:b("#pass-strength-result").addClass("strong").html(pwsL10n.strong);break;case 5:b("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);break;default:b("#pass-strength-result").addClass("short").html(pwsL10n["short"])}}b(document).ready(function(){b("#pass1").val("").keyup(c);b("#pass2").val("").keyup(c);b("#pass-strength-result").show();b(".color-palette").click(function(){b(this).siblings("input[name=admin_color]").attr("checked","checked")});b("#nickname").blur(function(){var f=b(this).val()||b("#user_login").val();var d=b("#display_name");var e=d.children("option:selected").attr("id");d.children("#display_nickname").remove();if(!d.children("option[value="+f+"]").length){d.append('<option id="display_nickname" value="'+f+'">'+f+"</option>")}b("#"+e).attr("selected","selected")});b("#first_name, #last_name").blur(function(){var d=b("#display_name");var g=b("#first_name").val(),e=b("#last_name").val();var f=d.children("option:selected").attr("id");b("#display_firstname, #display_lastname, #display_firstlast, #display_lastfirst").remove();if(g&&!d.children("option[value="+g+"]").length){d.append('<option id="display_firstname" value="'+g+'">'+g+"</option>")}if(e&&!d.children("option[value="+e+"]").length){d.append('<option id="display_lastname" value="'+e+'">'+e+"</option>")}if(g&&e){if(!d.children("option[value="+g+" "+e+"]").length){d.append('<option id="display_firstlast" value="'+g+" "+e+'">'+g+" "+e+"</option>")}if(!d.children("option[value="+e+" "+g+"]").length){d.append('<option id="display_lastfirst" value="'+e+" "+g+'">'+e+" "+g+"</option>")}}b("#"+f).attr("selected","selected")})})})(jQuery);