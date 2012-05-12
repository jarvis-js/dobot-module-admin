var npm = require("npm");

module.exports = function(bot, module) {

	module.addCommand({
		match: 'install module :name',
		func: function(request, name) {
			npm.load({}, function (error) {
				npm.commands.install([name], function (er, data) {
					bot.emit('module_installed', {name: name, data: data});
				});
			});
		}
	});

	module.addCommand({
		match: 'uninstall module :name',
		func: function(request, name) {
			npm.load({}, function (error) {
				npm.commands.remove([name], function (er, data) {
					bot.emit('module_uninstalled', {name: name, data: data});
				});
			});
		}
	});

	module.addCommand({
		match: 'load module :name',
		func: function(request, name) {
			bot._loadModule(name, function(error) {
				if (error) {
					request.reply = error;
					bot.reply(request);
				}
				else {
					request.reply = 'Loaded module: ' + name;
					bot.reply(request);
				}
			});
		}
	});

	module.addCommand({
		match: 'unload module :name',
		func: function(request, name) {
			bot._unloadModule(name, function(error) {
				if (error) {
					request.reply = error;
					bot.reply(request);
				}
				else {
					request.reply = 'Unloaded module: ' + name;
					bot.reply(request);
				}
			});
		}
	});

	module.addCommand({
		match: 'dump',
		func: function(request) {
			if (request.channel === 'shell:shell') {
				console.log(bot);
			}
		}
	});

};
