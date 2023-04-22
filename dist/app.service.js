"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const ytch = require('yt-channel-info');
const ytfps = require('ytfps');
let AppService = class AppService {
    constructor() {
        this.scrapeChannelPlaylistsCache = {};
        this.scrapePlaylistCache = {};
        this.expires = 1000 * 60 * 60 * 2;
    }
    getHello() {
        return 'Hello World!';
    }
    async scrapePlaylist(listID) {
        var _a;
        try {
            console.log(`Scraping playlist: ${JSON.stringify(listID)}`);
            const cache = this.scrapePlaylistCache[listID];
            let playlistData;
            if (cache && cache.playlistData && cache.time > Date.now() - this.expires) {
                playlistData = cache.playlistData;
            }
            else {
                playlistData = await ytfps(listID);
                this.scrapePlaylistCache[listID] = { playlistData, time: Date.now() };
            }
            console.log(`Found ${(_a = playlistData === null || playlistData === void 0 ? void 0 : playlistData.videos) === null || _a === void 0 ? void 0 : _a.length} videos in playlist: ${listID}`);
            return { data: playlistData, type: 'success' };
        }
        catch (e) {
            console.log(e);
            return { type: 'error', display: e.message };
        }
    }
    async scrapeChannelPlaylists(channelID) {
        try {
            const cache = this.scrapeChannelPlaylistsCache[channelID];
            let playlists;
            if (cache && cache.playlists && cache.time > Date.now() - this.expires) {
                playlists = cache.playlists;
            }
            else {
                playlists = (await ytch.getChannelPlaylistInfo({
                    channelId: channelID,
                })).items;
                this.scrapeChannelPlaylistsCache[channelID] = {
                    playlists,
                    time: Date.now(),
                };
            }
            console.log(`Found ${playlists.length} playlists in channel: ${channelID}`);
            return { type: 'success', data: playlists };
        }
        catch (e) {
            console.log(e);
            return { type: 'error', display: e.message };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map