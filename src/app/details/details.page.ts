import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute,private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['item']) {
        this.item = JSON.parse(params['item']);
      }
    });
  }

  goBack() {
    this.navCtrl.back();
  }

}
