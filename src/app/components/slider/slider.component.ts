import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

}

let count: number = 1;

const radio1 = document.getElementById("radio1") as HTMLInputElement;
if (radio1) {
  radio1.checked = true;
}

setInterval(function() {
  nextImage();
}, 5000);

function nextImage(): void {
  count++;
  if (count > 4) {
    count = 1;
  }

  const radioElement = document.getElementById("radio" + count) as HTMLInputElement;
  if (radioElement) {
    radioElement.checked = true;
  }
}
