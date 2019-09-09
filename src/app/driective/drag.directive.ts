import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {isNullOrUndefined} from "util";

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Input() appDragData = '';
  @Output() hwDragStart: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() hwDragEnd: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() hwDrag: EventEmitter<Event> = new EventEmitter<Event>();

  protected el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    // event.preventDefault();
    if (!isNullOrUndefined(this.appDragData)) {
      event.dataTransfer.setData('text/plain', this.appDragData);
    }

    this.hwDragStart.emit(event);
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {
    event.preventDefault();
    this.hwDragEnd.emit(event);
    event.dataTransfer.clearData();
  }

  @HostListener('drag', ['$event'])
  onDrag(event) {
    event.preventDefault();
    this.hwDrag.emit(event);
  }

}
