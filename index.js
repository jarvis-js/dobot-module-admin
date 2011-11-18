module.exports = function(bot, module) {

	module.addCommand('load module :name', function(request, name) {
		bot._loadModule(name, function(error) {
			if (error) {
				request.reply = error;
				bot.respond(request);
			}
			else {
				request.reply = 'Loaded module: ' + name;
				bot.respond(request);
			}
		});
	});

	module.addCommand('unload module :name', function(request, name) {
		bot._unloadModule(name, function(error) {
			if (error) {
				request.reply = error;
				bot.respond(request);
			}
			else {
				request.reply = 'Unloaded module: ' + name;
				bot.respond(request);
			}
		});
	});

	module.addCommand('dump', function(request) {
		request.reply = bot;
		bot.respond(request);
	});

};
