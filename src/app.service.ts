import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ytch = require('yt-channel-info');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ytfps = require('ytfps');
import { IPlaylist } from './dto/playlist.dto';
import IPlaylistData from './dto/video.dto';

@Injectable()
export class AppService {
  scrapeChannelPlaylistsCache: {
    [key: string]: { time: number; playlists: IPlaylist[] };
  } = {};
  scrapePlaylistCache: { [key: string]: { time: number; playlistData: IPlaylistData } } =
    {};
  expires = 1000 * 60 * 60 * 2;

  getHello(): string {
    return 'Hello World!';
  }

  async scrapePlaylist(
    listID: string,
  ): Promise<{ type: string; data?: IPlaylistData; display?: string }> {
    try {
      console.log(`Scraping playlist: ${JSON.stringify(listID)}`);
      const cache = this.scrapePlaylistCache[listID];
      let playlistData: IPlaylistData;
      if (cache && cache.playlistData && cache.time > Date.now() - this.expires) {
        playlistData = cache.playlistData;
      } else {
        playlistData = await ytfps(listID);
        this.scrapePlaylistCache[listID] = { playlistData, time: Date.now() };
      }
      console.log(`Found ${playlistData?.videos?.length} videos in playlist: ${listID}`);
      return { data: playlistData, type: 'success' };
    } catch (e) {
      console.log(e);
      return { type: 'error', display: e.message };
    }
  }

  async scrapeChannelPlaylists(
    channelID: string,
  ): Promise<{ type: string; data?: IPlaylist[]; display?: string }> {
    try {
      const cache = this.scrapeChannelPlaylistsCache[channelID];
      let playlists: IPlaylist[];
      if (cache && cache.playlists && cache.time > Date.now() - this.expires) {
        playlists = cache.playlists;
      } else {
        playlists = (
          await ytch.getChannelPlaylistInfo({
            channelId: channelID,
          })
        ).items;
        this.scrapeChannelPlaylistsCache[channelID] = {
          playlists,
          time: Date.now(),
        };
      }
      console.log(`Found ${playlists.length} playlists in channel: ${channelID}`);
      return { type: 'success', data: playlists };
    } catch (e) {
      console.log(e);
      return { type: 'error', display: e.message };
    }
  }
}
