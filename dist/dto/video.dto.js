"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = exports.Author = void 0;
const openapi = require("@nestjs/swagger");
class IPlaylistData {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: false, type: () => String }, url: { required: false, type: () => String }, id: { required: false, type: () => String }, video_count: { required: false, type: () => Number }, view_count: { required: false, type: () => Number }, description: { required: false, type: () => String }, isUnlisted: { required: false, type: () => Boolean }, isAlbum: { required: false, type: () => Boolean }, thumbnail_url: { required: false, type: () => String }, author: { required: false, type: () => require("./video.dto").Author }, videos: { required: false, type: () => [require("./video.dto").Video] } };
    }
}
exports.default = IPlaylistData;
class Author {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, url: { required: false, type: () => String }, avatar_url: { required: false, type: () => String } };
    }
}
exports.Author = Author;
class Video {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: false, type: () => String }, url: { required: false, type: () => String }, id: { required: false, type: () => String }, length: { required: false, type: () => String }, milis_length: { required: false, type: () => Number }, thumbnail_url: { required: false, type: () => String }, author: { required: false, type: () => require("./video.dto").Author } };
    }
}
exports.Video = Video;
//# sourceMappingURL=video.dto.js.map