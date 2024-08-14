import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [CommonModule]
})
export class SnackbarComponent {
  @Input() duration: number = 4;
  @Input() bottomDistance: number = 50;
  @Input() 
  set show(value: boolean) {
    this._show = value;
    this._show ? this.openSnackbar() : null;
  }
  get show() {
    return this._show
  }

  @Output() showChange = new EventEmitter<boolean>();

  _show: boolean = false;

  get animation() {
    return {
      '--duration': `${this.duration}s`,
      '--bottom-distance': `${this.bottomDistance}px`
    }
  }

  get classes() {
    return {
      'snackbar': true,
      'show': this._show === true
    }
  }

  openSnackbar() {
    setTimeout(() => {
      this._show = false;
      this.showChange.emit(this._show);
    }, this.duration * 1000)
  }

  @ViewChild('componente') component!: ElementRef<HTMLElement>;

}