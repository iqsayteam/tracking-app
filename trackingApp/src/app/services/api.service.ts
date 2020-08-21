import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "https://api.sheetson.com/v2/sheets";
  private headers: HttpHeaders = new HttpHeaders({
    "X-Spreadsheet-Id": "SHEET ID",
    "Authorization": "Bearer " + "KEY"
  });

  constructor(
    private http: HttpClient
  ) {

  }

  async updateDriverLocation(latitude: number, longitude: number, tracking: boolean): Promise<any> {
    let body: any = {
      timestamp: new Date(),
      latitude: latitude,
      longitude: longitude,
      tracking: tracking,
    };
    return this.http.patch(`${this.url}/Location/2`, body, { headers: this.headers }).toPromise();
  }
}
