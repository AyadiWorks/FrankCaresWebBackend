"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPlaylist = void 0;
const openapi = require("@nestjs/swagger");
class IPlaylist {
    static _OPENAPI_METADATA_FACTORY() {
        return { author: { required: true, type: () => String }, authorId: { required: true, type: () => String }, authorUrl: { required: true, type: () => String }, playlistId: { required: true, type: () => String }, playlistThumbnail: { required: true, type: () => String }, playlistUrl: { required: true, type: () => String }, title: { required: true, type: () => String }, type: { required: true, type: () => String }, videoCount: { required: true, type: () => Number } };
    }
}
exports.IPlaylist = IPlaylist;
//# sourceMappingURL=playlist.dto.js.map