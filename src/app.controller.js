"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getHello = function () {
        return this.appService.getHello();
    };
    AppController.prototype.scrapePlaylist = function (playlistID) {
        return this.appService.scrapePlaylist(playlistID);
    };
    AppController.prototype.scrapeChannelPlaylists = function () {
        return this.appService.scrapeChannelPlaylists('UCFXvY2LuEyam0yMQbTXxWIA');
    };
    __decorate([
        (0, common_1.Get)()
    ], AppController.prototype, "getHello");
    __decorate([
        (0, common_1.Get)('scrape-playlist/:playlistID'),
        __param(0, (0, common_1.Param)())
    ], AppController.prototype, "scrapePlaylist");
    __decorate([
        (0, common_1.Get)('scrape-channel-playlists')
    ], AppController.prototype, "scrapeChannelPlaylists");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
