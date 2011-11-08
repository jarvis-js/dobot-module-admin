module.exports = function(bot) {

	adminModule = new bot.Module();

	adminModule.load = function() {
		bot.registerCommand(this.name, 'load module :name', function(request, name) {
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

		bot.registerCommand(this.name, 'unload module :name', function(request, name) {
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

		bot.registerCommand(this.name, 'dump', function(request) {
			request.reply = bot;
			bot.respond(request);
		});
	};

	return adminModule;
};
