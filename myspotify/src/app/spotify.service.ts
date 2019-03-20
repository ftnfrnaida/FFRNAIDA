import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getSearch(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQAr_g2UeDyyJNrbPhQG_rd6gV8zB1N-_R_WTamhnk3knRrlXvNkvoxHJ9BCzNVjcE82xPjssOtaIBs7PQOQP1h3DHKitJG6GPVCP_Kp8IMTPPBbzTxBeN-L1bkCYfwTDT08ji9tkbovBBB6JcbCq8cHhJyQ-F4dPw"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getSearch(query);
  }

  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
