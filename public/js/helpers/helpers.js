$(document).ready( function () {

	$(".antiselect").each(function(){$(this).disableTextSelect();}); // disable text select

	var hasTouchEvents = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	var startEvent = hasTouchEvents ? "touchstart" : "mousedown";
	var moveEvent = hasTouchEvents ? "touchmove" : "mousemove";
	var stopEvent = hasTouchEvents ? "touchend" : "mouseup";
	var bdlEvent = hasTouchEvents ? "touchstart" : "dblclick";
	var errorMsg = "Fix errors";

	if(hasTouchEvents) { $("body").addClass("mobile"); } // disable transition features when mobile

	$(".stepSkipper").on("change keydown keyup",function () {
		var thisval = $(this).val();
		var thisid = $(this).attr("id");
		var e = $(this).closest("form").attr("id");
		if($(this).attr("type") == "checkbox") {
			thisval = $(this).is(":checked") ? 0 : 1;
		}
		if($(this).attr("type") == "text") {
			thisval = thisval == "no" || thisval == "n" ? 0 : 1;
		}
		if(thisval == 0) {
			$("#" + e + " fieldset."+thisid).addClass("skipped");
		} else 
		if(thisval == 1) {
			$("#" + e + " fieldset."+thisid).removeClass("skipped");
		}
		var s = $("#" + e + " fieldset").length,
			f = $("#" + e + " fieldset.skipped").length,
			fi = $("#" + e + " fieldset:not(.skipped)").last().index()
			fs = $("#" + e + " fieldset.active-fieldset").index();
		console.log($("#" + e + " fieldset."+thisid).index(),fi,fs)
		if(s-f == 1 || fi == fs ) {
			$("#" + e + " .multi-submit-btn").css("display", "block");
			$("#" + e + " .multi-next-btn").css("display", "none");
		} else {
			$("#" + e + " .multi-submit-btn").css("display", "none");
			$("#" + e + " .multi-next-btn").css("display", "block");
		}
	})

	$(".stepSkipAll").on("change",function () {
		var thisval = $(this).val();
		var nowindex = $(this).closest("fieldset").index();
		var e = $(this).closest("form").attr("id");
		if($(this).attr("type") == "checkbox") {
			thisval = $(this).is(":checked") ? 1 : 0;
		}
		if(thisval == 0) {
			$("fieldset").each(function () {
				var thisindex = $(this).index();
				if (nowindex < thisindex) { $(this).removeClass("skipped"); }
			});
			$("#" + e + " .multi-submit-btn").css("display", "none");
			$("#" + e + " .multi-next-btn").css("display", "block");
		} else 
		if(thisval == 1) {
			$("fieldset").each(function () {
				var thisindex = $(this).index();
				if (nowindex < thisindex) { $(this).addClass("skipped"); }
			});
			$("#" + e + " .multi-submit-btn").css("display", "block");
			$("#" + e + " .multi-next-btn").css("display", "none");
		}
	})

	$("form.multistep").length && $("form.multistep").each(function () {
		var e = $(this).attr("id"),
			s = $("#" + e + " fieldset").length,
			f = $("#" + e + " fieldset.skipped").length,
			t = $("#" + e + " .step").length,
			r = $("#" + e + " .multi-next-btn"),
			a = $("#" + e + " .multi-prev-btn"),
			i = $("#" + e + " .multi-submit-btn");
		$("#" + e + " fieldset").eq(0).addClass("active-fieldset"), t && $("#" + e + " .step").eq(0).addClass("active-step"), $("#" + e + " fieldset").eq(0).hasClass("active-fieldset") && (i.css("display", "none"), a.css("display", "none")), 
		r.on("click", function () {
			var valid = $("#" + e).valid();
			var founded = false;
			var $nextField = $("#" + e + " fieldset.active-fieldset").next("fieldset");
			var nextFieldIndex = $nextField.index();
			var $nowField = $("#" + e + " fieldset.active-fieldset");
			var nowFieldIndex = $nowField.index();
			var nextStepIndex = nextFieldIndex;
			nextStepIndex = nextStepIndex-($("#" + e + " .stepsHolder").size() > 0 ? $("#" + e + " .stepsHolder").index()+1 : 0 );
			if($nextField.hasClass("skipped")) {
				$("#" + e + " fieldset").each(function () {
					var thisindex = $(this).index();
					if(nextFieldIndex < thisindex && !$(this).hasClass("skipped") && !founded) {
						$nextField = $(this);
						nextFieldIndex = thisindex;
						founded = true;
					}
				})
			}
			if(!valid) { 
				$(window).trigger("resize");
				drawErrorButton($("#"+e));
			} else { 
				$nowField.removeClass("active-fieldset");
				$nextField.addClass("active-fieldset");
				$("#" + e + " .step.active-step").removeClass("active-step");
				$("#" + e + " .step").eq(nextStepIndex).addClass("active-step");
				a.css("display", "block");
				$(".prostoScroller_scrollerContent").parent().trigger("scrollTo",0);
			}
			f = $("#" + e + " fieldset.skipped").length,
			fi = $("#" + e + " fieldset:not(.skipped)").last().index()
			fs = $("#" + e + " fieldset.active-fieldset").index();
			if($("#" + e + " fieldset").eq(s - 1).hasClass("active-fieldset") || s-f == 1 || fi == fs) {
				i.css("display", "block"), r.css("display", "none");
			} else {
				i.css("display", "none"), r.css("display", "block");
			}
		}), a.on("click", function () {
			var founded = false;
			var $prevField = $("#" + e + " fieldset.active-fieldset").prev("fieldset");
			var prevFieldIndex = $prevField.index();
			var $nowField = $("#" + e + " fieldset.active-fieldset");
			var nowFieldIndex = $nowField.index();
			var prevStepIndex = prevFieldIndex;
			prevStepIndex = prevStepIndex-($("#" + e + " .stepsHolder").size() > 0 ? $("#" + e + " .stepsHolder").index()+1 : 0 );
			if($prevField.hasClass("skipped")) {
				for (var it = prevFieldIndex-1; it >= 0; it--) {
					if(!$("#" + e + " fieldset").eq(it).is(".skipped") && !founded) {
						$prevField = $("#" + e + " fieldset").eq(it);
						prevFieldIndex = it;
						founded = true;
					}
					console.log($("#" + e + " fieldset").eq(it));
				};
			}
			$nowField.removeClass("active-fieldset");
			$prevField.addClass("active-fieldset");
			$("#" + e + " .step.active-step").removeClass("active-step");
			$("#" + e + " .step").eq(prevStepIndex).addClass("active-step").removeClass("passed-step");
			if($("#" + e + " fieldset").eq(0).hasClass("active-fieldset")) {
				a.css("display", "none");
			}
			if($("#" + e + " fieldset").eq(s-2).hasClass("active-fieldset")) {
				i.css("display", "none");
				r.css("display", "block");
			}
			if(!$("#" + e + " fieldset").eq(s - 1).hasClass("active-fieldset")) {
				i.css("display", "none"), r.css("display", "block");
			}
			$("#"+e).find("button.primary").each(function () {
				$(this).text($(this).data("oldText")).removeAttr("disabled").removeClass("error"); 
			})
			setTimeout(function () {
				$(window).trigger("resize");
			},50)
			$(".prostoScroller_scrollerContent").parent().trigger("scrollTo",0);
		})
	})// multistep form activation
	
	$(".popupOpenBottom").on("click", function (e) {
		var $target = $($(this).attr("href"));
		if("none" == $target.css("display")) {
			$target.css({
				display: "block",
				left: "auto",
				right: "0",
			   opacity: "1"
			})
			$(this).find(".activator").css({opacity: "0"});
		} else 
		if (!$(e.target).closest(".popup-list-wrapper").length) {
			$target.css("display") && $target.css({
				display: "none",
			   left: "-9999px",
				opacity: "0"
			})
			$(this).find(".activator").css({opacity: "1"})
		}
	})
	$(document).on("click touchstart", function (e) {
		$(e.target).closest(".popupOpenBottom").length || "block" == $(".popupOpenBottom .popup-list-wrapper").css("display") && $(".popupOpenBottom .popup-list-wrapper").css({
			display: "none",
			left: "-9999px",
			opacity: "0"
		}),
		$(e.target).closest(".popupOpenBottom").length || $(".popupOpenBottom").find(".activator").css({opacity: "1"})
	})
	$(".popupOpen").on("click", function (e) {
		var $target = $($(this).attr("href"));
		if("none" == $target.css("display")) {
			$target.css({
				display: "block",
				left: "auto",
				right: "0",
				opacity: "1"
			})
		} else 
		if (!$(e.target).closest(".popup-list-wrapper").length) {
			$target.css("display") && $target.css({
				display: "none",
				left: "-9999px",
				opacity: "0"
			})
		}
	})

	$(document).on("click touchstart", function (e) {
		$(e.target).closest(".popupOpen").length || "block" == $(".popupOpen .popup-list-wrapper").css("display") && $(".popupOpen .popup-list-wrapper").css({
			display: "none",
			left: "-9999px",
			opacity: "0"
		})
	})

	$(".nofocus").bind("focus focusin", function (event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).trigger("focusout").blur();
		return false;
	})

	$(".trumbowyg-editor").bind("mouseover mouseout", function(event) {
		if(event.type == "mouseover") {
			$(this).find("textarea").trigger("mouseover");
		} else {
			$(this).find("textarea").trigger("mouseout");
		}
	})

	$(".input input:not(.nofocus), .textarea textarea:not(.nofocus), .select select:not(.nofocus), .trumbowyg-textarea").bind("focusin focus blur focusout tbwfocus tbwblur", function(event) {
		if (event.type == 'focusin' || event.type == 'focus' ||  event.type == 'tbwfocus') {
			$(this).closest("label.input, label.textarea, .input, .textarea").addClass("focus");
		} else {
			$(this).closest("label.input, label.textarea, .input, .textarea").removeClass("focus");
		}
	}) // focus helper for plugins

	var innerClick = false;

	$("*[type='reset']").on(startEvent,function () {
		innerClick = true;
		innerClickCalc = true;
		var $form = $(this).closest("form");
		$form.data("validated",false);
	})

	$(".captchaImage").on("mousedown touchend", function () {
		$(this).closest("label").removeClass("wrapper-valid wrapper-error");
		$(this).closest("label").find("input").val(null).removeClass("valid error");
		$(this).closest("label").find("*:not(input).error, *:not(input).valid").remove();
		var thissrc = $(this).find("img").attr("src");
		$(this).find("img").removeAttr("src").attr("src",thissrc);
	});

	// calculations 
	/////////////////////////////////////////////////////////////////////////////////////////////

	var calculationCount = 0;
	var innerClickCalc = true;

	$(".calculationDateTo, .calculationDateFrom").bind("change focusout blur", function () {
		if($('.calculationDateTo').val() && $('.calculationDateFrom').val()) {
			var dateTo = $('.calculationDateTo').val().split("/");
			var dateFrom = $('.calculationDateFrom').val().split("/");
			dateTo = new Date(dateTo[0], dateTo[1] - 1, dateTo[2]);
			dateFrom = new Date(dateFrom[0], dateFrom[1] - 1, dateFrom[2]);
			var daysCount = Math.floor((dateTo - dateFrom) / 864e5);
			if($('.calculationDateCount').val() != daysCount) {
				$('.calculationDateCount').val(daysCount).trigger("change");
			}
		}
	});

	$(".calculationCount, .calculationCost").bind("focus",function (event) {
		var $form = $(this).closest(".pf_form");
		if(event.type == "focus") { innerClickCalc = false; }
		if(!innerClickCalc) {
			$form.find("#calculationTotal").fadeIn(200);
		}
	})

	$(".calculationParent").find("input, select, textarea").each(function (i) {
		var thisclass = $(this).attr("class") ? $(this).attr("class").replace(new RegExp(" ", 'g'), "_")+i : i;
		var thistype = $(this).attr("type")+i;
		var thisname = $(this).attr("name") ? $(this).attr("name").replace("[","").replace("]","")+i : "noname"+i;
		var thisid = $(this).attr("id") ? $(this).attr("id") : "object_"+thistype+"_"+thisclass+"_"+thisname;
		$(this).attr("id",thisid);
	})

	$(".calculationCount").bind("change input",function (event) {
		console.log(event.type);
		var $form = $(this).closest(".pf_form");
		var $calcParent = $(this).closest(".calculationParent")
		var calculations = isNaN($(this).val()) ? 0 : parseFloat($(this).val());
		if($calcParent.size() > 0) {
			$calcParent.find(".calculationCost").data("count",calculations).data("changed",true);
			$form.find(".calculationCost").trigger("change");
		} else {
			$form.find(".calculationCost").data("count",calculations);
			$form.find(".calculationCost").eq(0).trigger("change");
		}
	})

	$(".calculationCost").bind("change focus input", function (event) {
		calculationCount = 0;
		var $calcParent = $(this).closest(".calculationParent");
		var $form = $(this).closest(".pf_form");
		var price = $calcParent.size() > 0 ? parseFloat($calcParent.find(".calculationCost").val()) : ($(this).data("price") && $(this).get(0).tagName != "SELECT" ? $(this).data("price") : $(this).find("option:selected").data("price"));
		var count = $calcParent.size() > 0 ? 1 : $(this).data("count") && $(this).get(0).tagName != "SELECT" ? $(this).data("count") : 1;
		var thiscount = $calcParent.size() > 0 ? parseFloat($calcParent.find(".calculationCount").val()) : parseInt($(this).val() > 0 && $(this).val() !== 'undefined' || $(this).is(":checked") ? (isNaN($(this).val()) ? 1 : $(this).val()) : 0 ,10);
		var freeprice = $(this).data("freeprice") ? parseInt($(this).data("freeprice")) : 0;
		$(this).data("thiscount",thiscount).data("freeprice",freeprice).data("price",price).data("changed",true);
		$form.find(".calculationTarget").text("0");
		$form.find(".calculationCost").each(function (i) {
			var $calcParent = $(this).closest(".calculationParent");
			if(!$(this).data("changed") && $calcParent.size() == 0) { return this; }
			var price = $(this).data("price");
			var count = $calcParent.size() > 0 ? 1 : $(this).data("count");
			var thiscount = $(this).get(0).tagName != "SELECT" ? $(this).data("thiscount") : 1 ;
			var freeprice = $(this).data("freeprice");
			var priceTarget = $calcParent.size() > 0 ? $calcParent.find(".calculationParentTotal") : ($(this).data("calctarget") ? $(this).data("calctarget") : false);
			count = count >= 0 ? count : 0;
			if(freeprice) {
				price = thiscount > freeprice ? price : 0;
			}
			var itemprice = ((thiscount-freeprice)*price)*count;
			console.log(thiscount+"-"+freeprice+"*"+price+"*"+count+"="+itemprice);
			if(priceTarget) {
				var targetVal = $calcParent.size() > 0 ? itemprice : parseInt($(priceTarget).text(),10)+itemprice;
				targetVal = isNaN(targetVal) ? 0 : targetVal;
				console.log(targetVal);
				$(priceTarget).val(targetVal).text(targetVal);
			}
		})
		if($form.find(".calculationParent").size() > 0) {
			$form.find(".calculationParentTotal").each(function () {
				calculationCount = calculationCount+parseInt($(this).val(),10);
			})
		} else {
			$form.find(".calculationTarget").each(function () {
				calculationCount = calculationCount+parseInt($(this).text(),10);
			})
		}
		$form.find("#totalCost").text(calculationCount);
	});

	/////////////////////////////////////////////////////////////////////////////////////////////

	$("form.pf_form").on("submit",function () {
		$(this).find("#calculationTotal").fadeIn(200);
		drawErrorButton($(this));
	});

	function drawErrorButton ($form) {
		$form = $form ? $form : $(this);
		$form.data("validated",true);
		var valid = $form.valid();
		console.log(valid);
		if(!valid) { 
			$form.find("button.primary").each(function () {	
				if(!$(this).data("errormsg")) { $(this).data("errormsg",errorMsg); }
				$(this).addClass("error").data("oldText",$(this).text()).text($(this).data("errormsg")).attr("disabled",1); 
			})
		}
		var $popup = $form.closest(".fastPopupWrapper");
		setTimeout(function () {
			if($popup.length > 0) {
				$(window).trigger("resize");
			}
		},50)
	}

	$("form.pf_form").find("input, textarea, select").on("focusout blur change keypress input", function (event) {
		var $form = $(this).closest("form");
		if($form.find("input.error, textarea.error, select.error").size() != 1 && event.type == 'keypress') { return this; }
		if(!$form.data("validated")) { return this; }
		console.log($form.find("input.error, textarea.error, select.error").size(), "focusout blur");
		var valid = $form.valid();
		$form.find("button.primary").each(function () {	
			if(valid) { 
				$(this).text($(this).data("oldText")).removeAttr("disabled").removeClass("error"); 
			} else {
				$(this).addClass("error").text($(this).data("errormsg")).attr("disabled",1);
			}
		})
	})

	$("form").on("reset",function (event,data) {
		var $popup = $(this).closest(".fastPopupWrapper");
		var $form = $(this);
		$("#calculationTotal").fadeOut(300,function () { $(this).find("span").text("0") });
		$(".gmapHolder").slideUp(300);
		$(this).find("button.primary").each( function () { console.log($(this).data("oldText")); $(this).text($(this).data("oldText")).removeAttr("disabled") });
		$(this).find(".step").removeClass("active-step").removeClass("passed-step");
		$(this).find(".step").eq(0).addClass("active-step");
		$(this).find(".captchaImage").trigger("mousedown");
		$(this).find(".unit.check").removeClass("wrapper-valid wrapper-error");
		$(this).find(".input").removeClass("wrapper-valid wrapper-error");
		$(this).find(".textarea").removeClass("wrapper-valid wrapper-error");
		$(this).find(".check").removeClass("wrapper-valid wrapper-error");
		$(this).find(".select").removeClass("wrapper-valid wrapper-error");
		$(this).find("input, textarea, select, button").removeClass("valid error processing");
		$(this).find("*.error:not(input):not(select):not(textarea):not(button)").remove();
		$(this).find('button[type="submit"]').attr("disabled", !1).removeClass("processing");
		$(this).find(".multi-prev-btn").attr("disabled", !1);
		$(this).find(".multi-prev-btn").css("display", "none");
		$(this).find(".multi-submit-btn").css("display", "none");
		$(this).find("fieldset").removeClass("active-fieldset");
		$(this).find("fieldset").eq(0).addClass("active-fieldset");
		$(this).find(".multi-next-btn").css("display", "block");
		$(this).data("validated",false);
		$(this).find(".toclone").each(function (s) {
            $(this).index() > 0 && $(this).remove();
        })
		setTimeout(function () {
			if(!innerClick) {
				$(this).find("#response").addClass("none").removeClass('success-message error-message');
				if($popup.length > 0) {
					$popup.find(".fastPopupClose").trigger("click");
				}
				innerClick = false;
			}
		}, 10000);
		setTimeout(function () {
			if($popup.length > 0) {
				$(window).trigger("resize");
			}
			if($form.find("#response").hasClass('success-message') && $form.data("successurl")) {
				window.location.href = $form.data("successurl");
			}
		},50)
	})

	
	
	$("input, textarea").each(function (i) {
		var thisclass = $(this).attr("class") ? $(this).attr("class").replace(new RegExp(" ", 'g'), "_") : i;
		var thistype = $(this).attr("type");
		var thisname = $(this).attr("name") ? $(this).attr("name").replace("[","").replace("]","") : "noname"+i;
		var thisid = $(this).attr("id") ? $(this).attr("id") : "object_"+thistype+"_"+thisclass+"_"+thisname;
		$(this).attr("id",thisid);
	}) // takes ids for nonid form elements

});