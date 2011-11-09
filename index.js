module.exports = function(bot) {

	var module = new bot.Module();

	module.load = function() {
		bot.registerCommand(module.name, 'load module :name', function(request, name) {
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

		bot.registerCommand(module.name, 'unload module :name', function(request, name) {
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

		bot.registerCommand(module.name, 'dump', function(request) {
			request.reply = bot;
			bot.respond(request);
		});
	};

	return module;
};
