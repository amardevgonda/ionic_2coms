import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any[] = [];
  location: string;

  constructor(private navCtrl: NavController,private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.items = data;
    }, error => {
      console.error('Error fetching data', error);
    });
  }
  // goToDetails() {
  //   this.navCtrl.navigateForward('/details');
  // }

  goToDetails(item: any) {
    this.navCtrl.navigateForward('/details', {
      queryParams: { item: JSON.stringify(item) }
    });
  }


  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.location = `Lat: ${coordinates.coords.latitude}, Lon: ${coordinates.coords.longitude}`;
    } catch (error) {
      console.error('Error getting location', error);
      this.location = 'Error getting location';
    }
  }
}
