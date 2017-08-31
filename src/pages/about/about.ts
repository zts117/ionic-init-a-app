import { Component } from "@angular/core";
import { PopoverController } from "ionic-angular";
import { ConferenceData } from '../../providers/conference-data';

import { PopoverPage } from "../about-popover/about-popover";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  conferenceDate = "2047-05-17";
  speakers: any[] = [];

  constructor(
    public popoverCtrl: PopoverController,
    public confData: ConferenceData
  ) {}

  ionViewDidLoad() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
