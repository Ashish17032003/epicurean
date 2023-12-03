import { Component, OnInit } from '@angular/core';
import { WebDataService } from './services/web-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Epicurean Symphony';
  locationData: any;
  chefData: any;
  awardsData: any;
  ambianceData: any;
  sustainabilityData: any;
  eventsData: any;
  onlinePresenceData: any;
  reviewsData: any;
  menuCategoriesData: any;
  seasonalMenuData: any;

  constructor(private webDataService: WebDataService) {}

  ngOnInit(): void {
    this.webDataService.getLocation().subscribe((data) => {
      this.locationData = data;
      console.log(data);
    });

    this.webDataService.getChef().subscribe((data) => {
      this.chefData = data;
      console.log(data);
    });

    this.webDataService.getAwards().subscribe((data) => {
      this.awardsData = data;
      console.log(data);
    });

    this.webDataService.getAmbiance().subscribe((data) => {
      this.ambianceData = data;
      console.log(data);
    });

    this.webDataService.getSustainability().subscribe((data) => {
      this.sustainabilityData = data;
      console.log(data);
    });

    this.webDataService.getEvents().subscribe((data) => {
      this.eventsData = data;
      console.log(data);
    });

    this.webDataService.getOnlinePresence().subscribe((data) => {
      this.onlinePresenceData = data;
      console.log(data);
    });

    this.webDataService.getReviews().subscribe((data) => {
      this.reviewsData = data;
      console.log(data);
    });

    this.webDataService.getMenuCategories().subscribe((data) => {
      this.menuCategoriesData = data;
      console.log(data);
    });

    this.webDataService.getSeasonalMenu().subscribe((data) => {
      this.seasonalMenuData = data;
      console.log(data);
    });
  }
}
