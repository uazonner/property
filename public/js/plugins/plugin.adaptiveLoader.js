var execStack = {};
var loadStack = {};

(function ($) {
	$.adaptiveLoad = $.fn.adaptiveLoad = function (options) {
		var method = {};
		var objCounter = 0;
		var opts = $.extend({
			pluginName: "",
			pluginsUrl: document.location.origin + "/scripts/plugins/dev/",
			pluginPrefix: "plugin",
			pluginSuffix: "",
			minSuffix: "min",
			loadMin: false
		}, $.fn.adaptiveLoad.defaults, options);

		method.startPlugin = function (pluginName) {
			var count = 0;
			for (var key in execStack[pluginName]) {
				var $obj = execStack[pluginName][key].object;
				var options = execStack[pluginName][key].options;
				$obj[pluginName].apply($obj, options);
			}
			delete(execStack[pluginName]);
			for (var key in execStack) {
				count++;
			}
			if (count === 0) {
				$(document).trigger("loaded");
			}
		};

		$.cachedScript = method.cachedScript = function (url, options) {
			options = $.extend(options || {}, {
				dataType: "script",
				cache: true,
				url: url
			});
			return $.ajax(options);
		};

		method.loadPlugin = function ($obj, options, pluginName, url) {
			if($obj.size() <=0 ) { return this; }
			objCounter++;
			var id = $obj.attr("id") ? $obj.attr("id") : "noid_" + $obj.attr("name") + "_" + objCounter;
			var options = typeof (options) !== "object" ? {} : options;
			execStack[pluginName] = execStack[pluginName] ? execStack[pluginName] : {};
			execStack[pluginName][id] = {
				"object": $obj,
				"options": options,
				"plugin": pluginName
			};
			if (!loadStack[pluginName]) {
				if (!loadStack[pluginName]) {
					loadStack[pluginName] = true;
					options = options ? options : {};
					$.cachedScript(url).done(function (script, textStatus) {
						method.startPlugin(pluginName);
					}).fail(function (jqxhr, settings, exception) {
						loadStack[pluginName] = false;
						method.loadPlugin($obj, options, pluginName, url);
					});
				}
			}
		};

		method.createPlugLoader = function (pluginName) {
			if (!$.fn[pluginName]) {
				$.fn[pluginName] = function (options) {
					var prefix = opts.pluginPrefix.length >= 1 ? opts.pluginPrefix + "." : opts.pluginPrefix;
					var suffix = opts.pluginSuffix.length >= 1 ? "." + opts.pluginSuffix : opts.pluginSuffix;
					var suffix = opts.loadMin ? suffix + "." + opts.minSuffix : suffix;
					var url = opts.pluginsUrl + prefix + pluginName + suffix + ".js";
					method.loadPlugin($(this), arguments, pluginName, url);
				};
			}
		};

		method.addPlugin = function () {
			if (typeof (opts.pluginName) == "object") {
				for (key in (opts.pluginName)) {
					if (opts.pluginName.hasOwnProperty(key) && String(parseInt(key, 10)) === key) {
						method.createPlugLoader(opts.pluginName[key]);
					}
				}
			}
			if (typeof (opts.pluginName) == "string") {
				method.createPlugLoader(opts.pluginName);
			}
		};

		method.addPlugin();
	};
})(jQuery);

$(document).adaptiveLoad({pluginName:["writeDebug","browser","cookie","mousewheel","antiselect","prostoScroller","fastPopup","growTextarea","helpFill","ImageField","simplePassword","simpleSelector","simpleChecker","simpleTicker","simpleSlider","tagField","tagMultiSelect","simpletips","mask","datetimepicker","validate","trumbowyg","form"]});