import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import IPlaylistData from './dto/video.dto';
import { IPlaylist } from './dto/playlist.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @ApiTags('Youtube')
  @Get('scrape-playlist/:playlistID')
  scrapePlaylist(
    @Param() { playlistID },
  ): Promise<{ type: string; data?: IPlaylistData; display?: string }> {
    return this.appService.scrapePlaylist(playlistID);
  }
  @ApiTags('Youtube')
  @Get('scrape-channel-playlists')
  scrapeChannelPlaylists(): Promise<{
    type: string;
    data?: IPlaylist[];
    display?: string;
  }> {
    return this.appService.scrapeChannelPlaylists('UCFXvY2LuEyam0yMQbTXxWIA');
  }
}
