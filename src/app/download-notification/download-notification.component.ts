import { Component, OnInit, OnDestroy } from "@angular/core";
//import * as Stomp from "stompjs";
//import * as SockJS from "sockjs-client";
//import $ from "jquery";

//"sockjs-client": "^1.3.0",
//"stompjs": "^2.3.3",
@Component({
  selector: "app-download-notification",
  templateUrl: "./download-notification.component.html",
  styleUrls: ["./download-notification.component.css"]
})
export class DownloadNotificationComponent implements OnInit, OnDestroy {
  private serverUrl = "http://localhost:8080/websocket-example";
  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.stompClient.disconnect();
  }

  initializeWebSocketConnection() {
    // let ws = new SockJS(this.serverUrl);
    // this.stompClient = Stomp.over(ws);
    // let that = this;
    // this.stompClient.connect(
    //   {},
    //   function(frame) {
    //     that.stompClient.subscribe("/topic/messages", message => {
    //       // if(message.body) {
    //       //   $(".chat").append("<div class='message'>"+message.body+"</div>")
    //       //   console.log(message.body);
    //       // }
    //       console.log(message);
    //     });
    //   }
    //);
  }
}
