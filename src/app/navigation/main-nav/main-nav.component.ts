import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  @Output() sidenavToggleState = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  sidenavToggle(){
    this.sidenavToggleState.emit();
  }

}
