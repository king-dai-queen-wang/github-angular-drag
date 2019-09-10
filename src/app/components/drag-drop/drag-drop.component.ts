import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {DragDirective} from "../../driective/drag.directive";
import {isNullOrUndefined} from "util";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  @ViewChildren(DragDirective) dragItems: QueryList<DragDirective>;
  public option$: BehaviorSubject<number[]> = new BehaviorSubject([0,1,2,3,4,5,6,7,8]);
  private dragSource: any;
  private dragTarget: any;
  private isDragging = false;
  lastTransformedBlock = null;
  constructor(private render2:Renderer2, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  isMyself(target: any) {
    return this.dragSource.toString() === target.toString();
  }

  addDraggingClass(event: Event) {
    (event.currentTarget as HTMLElement).classList.add('dragging');
  }

  removeDraggingClass(event: Event){
    (event.currentTarget as HTMLElement).classList.remove('dragging');
  }

  addDragedClass(event: Event) {
    (event.currentTarget as HTMLElement).classList.add('draged');
  }

  removeDragedClass(event: Event){
    (event.currentTarget as HTMLElement).classList.remove('draged');
  }

  onDragStart(event: any) {
    this.isDragging = true;
    this.dragSource = event.dataTransfer.getData('text/plain');
    this.addDraggingClass(event);
  }

  onDrag(event: Event) {
  }

  onDragEnd(event: Event) {
    this.removeDraggingClass(event);
    this.isDragging = false;
    console.log('dragEnd', event.target);
    this.resetPosition();
  }

  onDragEnter(event: Event, target: any) {
    this.isDragging = true;
    // this.resetPosition();
    if (this.isMyself(target)) {
      return
    }
    
    if(!isNullOrUndefined(this.lastTransformedBlock)) this.resetDragTargetPosition(this.lastTransformedBlock);

    this.lastTransformedBlock = target;
    
    
    console.log('onDragEnter', target, this.lastTransformedBlock);
    // reset last
    

    this.dragTarget = target;

    this.changePosition();
  }

  onDragOver(event: Event) {
  }

  onDragLeave(event: any, target: any) {
    // this.lastTransformedBlock = target;
    if (this.isMyself(target)) {
      return
    }
    console.log('onDragLeave', target, this.lastTransformedBlock);

  }

  onDrop(event: any, target) {
    const fromData = event.dataTransfer.getData('text/plain');
    this.ajax(fromData, this.dragTarget);
    this.resetPosition();
  }

  ajax(fromData: any, targetData: any): void {
    if (isNullOrUndefined(targetData) ||  fromData.toString() === targetData.toString()) {
      return;
    }
    console.log(fromData + '<==>' + targetData);
    const option = this.option$.getValue();
    option.splice(targetData,1,...option.splice(fromData, 1 , option[targetData]));
    this.option$.next(option);
    this.cdr.markForCheck();
    this.dragTarget = null;
    this.dragSource = null;
  }

  changePosition() {

    const sourceEl: ElementRef = this.dragItems.find(i => i.appDragData.toString() === this.dragSource.toString()).el;
    const sourceElement = (sourceEl.nativeElement as HTMLElement);
    const sourcePosition = [sourceElement.offsetLeft, sourceElement.offsetTop];
    console.log(sourceElement.style.transform)
    const targetEl: ElementRef = this.dragItems.find(i => i.appDragData.toString() === this.dragTarget.toString()).el;
    const targetElement = (targetEl.nativeElement as HTMLElement);
    const targetPosition = [targetElement.offsetLeft, targetElement.offsetTop];
  
    let toSourceValue = `translate(${ Math.round(sourcePosition[0] - targetPosition[0]) }px, ${ Math.round(sourcePosition[1] - targetPosition[1]) }px)`;
    let toTargetValue = `translate(${ Math.round(targetPosition[0] - sourcePosition[0]) }px, ${ Math.round(targetPosition[1] - sourcePosition[1]) }px)`;

    console.log('change position', sourcePosition,targetPosition 
    )
    this.render2.addClass(targetEl.nativeElement,'draged');
    this.render2.setStyle(sourceEl.nativeElement,'transform', toTargetValue);
    this.render2.setStyle(targetEl.nativeElement,'transform', toSourceValue);
    this.render2.reClass(targetEl.nativeElement,'draged');
    
  }

  resetPosition() {
    console.log('reset');
    const sourceEl: ElementRef = this.dragItems.forEach(item => {
      this.render2.setStyle(item.el.nativeElement,'transform', `translate(0)`);
    });

  }

  resetDragTargetPosition(target) {
    const targetEl: ElementRef = this.dragItems.find(i => i.appDragData.toString() === target.toString()).el;
    const targetPosition = [0, 0];

    let toTargetValue = `translate(0)`;

    this.render2.setStyle(targetEl.nativeElement,'transform', toTargetValue);
    this.render2.removeClass(targetEl.nativeElement,'dragging');
  }

  // @HostListener('mouseup', ['$event'])
  // onMouseUp(event) {
    
  // }

}
