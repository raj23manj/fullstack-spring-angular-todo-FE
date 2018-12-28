import { Component, OnInit, OnDestroy } from "@angular/core";
import { RxStompService } from "../../../node_modules/@stomp/ng2-stompjs";
import { Message } from "../../../node_modules/@stomp/stompjs";
import { Subscription } from "../../../node_modules/rxjs";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit, OnDestroy {
  private topicSubscription: Subscription;

  constructor(private rxStompService: RxStompService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch("/topic/messages")
      .subscribe((message: Message) => {
        console.log("From topic");
        console.log(message.body);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }
}
