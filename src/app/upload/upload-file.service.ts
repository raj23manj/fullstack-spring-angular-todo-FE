import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../app.constants";

@Injectable({
  providedIn: "root"
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    //debugger;
    formdata.append("uploadfile", file);
    formdata.append("keyname", file.name);

    const req = new HttpRequest(
      "POST",
      `${API_URL}/api/file/upload`,
      formdata,
      {
        reportProgress: true,
        responseType: "text"
      }
    );

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get("/getallfiles");
  }

  downloadFile(fileName: String): Observable<any> {
    return this.http.get(`${API_URL}/api/file/${fileName}`, {
      responseType: "text"
    });
  }

  downloadFileUrl(fileName: String): Observable<any> {
    return this.http.get(`${API_URL}/api/file/downloadUrl`, {
      responseType: "text"
    });
  }
}
