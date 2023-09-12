(()=>{function a(a,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}var e=function(){function e(){!function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,l,n;return t=e,n=[{key:"formatState",value:function(a){return!a.id||a.element.value.toLowerCase().includes("...")?a.text:$('<span><img src="'+$("#language_flag_path").val()+a.element.value.toLowerCase()+'.svg" class="img-flag" width="16" alt="Language flag"/> '+a.text+"</span>")}},{key:"createOrUpdateLanguage",value:function(a,e,t,l,n,r,o,g){var s=route("languages.store");g&&(s=route("languages.edit")+"?lang_code="+l),$("#btn-language-submit").addClass("button-loading"),$.ajax({url:s,type:"POST",data:{lang_id:a,lang_name:e,lang_locale:t,lang_code:l,lang_flag:n,lang_order:r,lang_is_rtl:o},success:function(e){e.error?Botble.showError(e.message):(g?$(".table-language").find("tr[data-id="+a+"]").replaceWith(e.data):$(".table-language").append(e.data),Botble.showSuccess(e.message)),$("#language_id").val("").trigger("change"),$("#lang_name").val(""),$("#lang_locale").val(""),$("#lang_code").val(""),$("#flag_list").val("").trigger("change"),$(".lang_is_ltr").prop("checked",!0),$("#btn-language-submit-edit").prop("id","btn-language-submit").text("Add new language"),$("#btn-language-submit").removeClass("button-loading")},error:function(a){$("#btn-language-submit").removeClass("button-loading"),Botble.handleError(a)}})}}],(l=[{key:"bindEventToElement",value:function(){var a=this;jQuery().select2&&$(".select-search-language").select2({width:"100%",templateResult:e.formatState,templateSelection:e.formatState});var t=$(".table-language");$(document).on("change","#language_id",(function(a){var e=$(a.currentTarget).find("option:selected").data("language");void 0!==e&&e.length>0&&($("#lang_name").val(e[2]),$("#lang_locale").val(e[0]),$("#lang_code").val(e[1]),$("#flag_list").val(e[4]).trigger("change"),$(".lang_is_"+e[3]).prop("checked",!0),$("#btn-language-submit-edit").prop("id","btn-language-submit").text("Add new language"))})),$(document).on("click","#btn-language-submit",(function(a){a.preventDefault();var t=$("#lang_name").val(),l=$("#lang_locale").val(),n=$("#lang_code").val(),r=$("#flag_list").val(),o=$("#lang_order").val(),g=$(".lang_is_rtl").prop("checked")?1:0;e.createOrUpdateLanguage(0,t,l,n,r,o,g,0)})),$(document).on("click","#btn-language-submit-edit",(function(a){a.preventDefault();var t=$("#lang_id").val(),l=$("#lang_name").val(),n=$("#lang_locale").val(),r=$("#lang_code").val(),o=$("#flag_list").val(),g=$("#lang_order").val(),s=$(".lang_is_rtl").prop("checked")?1:0;e.createOrUpdateLanguage(t,l,n,r,o,g,s,1)})),t.on("click",".deleteDialog",(function(a){a.preventDefault(),$(".delete-crud-entry").data("section",$(a.currentTarget).data("section")),$(".modal-confirm-delete").modal("show")})),$(".delete-crud-entry").on("click",(function(e){e.preventDefault(),$(".modal-confirm-delete").modal("hide");var l=$(e.currentTarget).data("section");$(a).prop("disabled",!0).addClass("button-loading"),$.ajax({url:l,type:"POST",data:{_method:"DELETE"},success:function(e){e.error?Botble.showError(e.message):(e.data&&(t.find("i[data-id="+e.data+"]").unwrap(),$(".tooltip").remove()),t.find('a[data-section="'+l+'"]').closest("tr").remove(),Botble.showSuccess(e.message)),$(a).prop("disabled",!1).removeClass("button-loading")},error:function(e){$(a).prop("disabled",!1).removeClass("button-loading"),Botble.handleError(e)}})})),t.on("click",".set-language-default",(function(a){a.preventDefault();var e=$(a.currentTarget);$.ajax({url:e.data("section"),type:"GET",success:function(a){if(a.error)Botble.showError(a.message);else{var l=t.find("td > i");l.replaceWith('<a data-section="'+route("languages.set.default")+"?lang_id="+l.data("id")+'" class="set-language-default" data-bs-toggle="tooltip" data-bs-original-title="Choose '+l.data("name")+' as default language">'+l.closest("td").html()+"</a>"),e.find("i").unwrap(),$(".tooltip").remove(),Botble.showSuccess(a.message)}},error:function(a){Botble.handleError(a)}})})),t.on("click",".edit-language-button",(function(a){a.preventDefault();var e=$(a.currentTarget);$.ajax({url:route("languages.get")+"?lang_id="+e.data("id"),type:"GET",success:function(a){if(a.error)Botble.showError(a.message);else{var e=a.data;$("#lang_id").val(e.lang_id),$("#lang_name").val(e.lang_name),$("#lang_locale").val(e.lang_locale),$("#lang_code").val(e.lang_code),$("#flag_list").val(e.lang_flag).trigger("change"),$(".lang_is_rtl").prop("checked",e.lang_is_rtl),$(".lang_is_ltr").prop("checked",!e.lang_is_rtl),$("#lang_order").val(e.lang_order),$("#btn-language-submit").prop("id","btn-language-submit-edit").text("Update")}},error:function(a){Botble.handleError(a)}})})),$(document).on("click",".button-save-language-settings",(function(a){a.preventDefault();var e=$(a.currentTarget);e.addClass("button-loading");var t=e.closest("form");$.ajax({url:t.prop("action"),type:"POST",data:t.serialize(),success:function(a){e.removeClass("button-loading"),a.error?Botble.showError(a.message):(Botble.showSuccess(a.message),t.removeClass("dirty"))},error:function(a){e.removeClass("button-loading"),Botble.handleError(a)}})}))}}])&&a(t.prototype,l),n&&a(t,n),e}();$(document).ready((function(){(new e).bindEventToElement()}))})();