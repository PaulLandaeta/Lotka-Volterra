import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './video.html'
})
export class VideoComponent {
    player: YT.Player;
    private id: string = 'SXPdXD49nWM';
   
    savePlayer(player) {
      this.player = player;
      console.log('player instance', player);
    }
    onStateChange(event) {
      console.log('player state', event.data);
    }
}
