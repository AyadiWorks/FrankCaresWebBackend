import { IPlaylist } from './dto/playlist.dto';
import IPlaylistData from './dto/video.dto';
export declare class AppService {
    scrapeChannelPlaylistsCache: {
        [key: string]: {
            time: number;
            playlists: IPlaylist[];
        };
    };
    scrapePlaylistCache: {
        [key: string]: {
            time: number;
            playlistData: IPlaylistData;
        };
    };
    expires: number;
    getHello(): string;
    scrapePlaylist(listID: string): Promise<{
        type: string;
        data?: IPlaylistData;
        display?: string;
    }>;
    scrapeChannelPlaylists(channelID: string): Promise<{
        type: string;
        data?: IPlaylist[];
        display?: string;
    }>;
}
