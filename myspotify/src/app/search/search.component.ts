import { Component, Output, EventEmitter } from "@angular/core";
import { SpotifyService } from "../spotify.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;
  listRes = null;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();
  constructor(private spotifyService: SpotifyService) {}

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      (res: any) => {
        console.log(res);
        this.listRes = res.artists.items;
        console.log(this.listRes, "test");
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }
}
