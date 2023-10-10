import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  countDownDate: number;
  countdownText: string;

  constructor() {
    // Set the date we're counting down to
    this.countDownDate = new Date("Dec 10, 2023 15:37:25").getTime();
    this.countdownText = '';

    this.updateCountdown(); // Call the function immediately to avoid initial delay

    // Update the count down every 1 second
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnInit(): void {
  }

  updateCountdown(): void {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      this.countdownText = 'EXPIRED';
    } else {
      this.countdownText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    }
  }
}
