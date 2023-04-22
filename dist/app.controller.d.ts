import { AppService } from './app.service';
import IPlaylistData from './dto/video.dto';
import { IPlaylist } from './dto/playlist.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    scrapePlaylist({ playlistID }: {
        playlistID: any;
    }): Promise<{
        type: string;
        data?: IPlaylistData;
        display?: string;
    }>;
    scrapeChannelPlaylists(): Promise<{
        type: string;
        data?: IPlaylist[];
        display?: string;
    }>;
}
