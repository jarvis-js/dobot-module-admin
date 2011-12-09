var npm = require("npm");

module.exports = function(bot, module) {

	module.addCommand('install module :name', function(request, name) {
		npm.load({}, function (error) {
			npm.commands.install([name], function (er, data) {
				bot.emit('module_installed', {name: name, data: data});
			});
		});
	});

	module.addCommand('uninstall module :name', function(request, name) {
		npm.load({}, function (error) {
			npm.commands.remove([name], function (er, data) {
				bot.emit('module_uninstalled', {name: name, data: data});
			});
		});
	});

	module.addCommand('load module :name', function(request, name) {
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
	});

	module.addCommand('unload module :name', function(request, name) {
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
	});

	module.addCommand('dump', function(request) {
		if (request.channel === 'shell:shell') {
			console.log(bot);
		}
	});

};
