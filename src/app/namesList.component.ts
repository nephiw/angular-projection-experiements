import { 
  Component, 
  OnInit, 
  ContentChildren, 
  QueryList, 
  ViewChild, 
  ViewContainerRef, 
  AfterContentInit 
} from '@angular/core';
import { NameComponent } from './name.component';

@Component({
  selector: 'app-names-list',
  templateUrl: './namesList.component.html',
  styles: ['h1 { border-bottom: solid 1px grey; }']
})
export class NamesListComponent implements AfterContentInit {
  @ContentChildren(NameComponent, { read: NameComponent }) children: QueryList<NameComponent>;
  @ViewChild('large', { static: true, read: ViewContainerRef }) largeNamesContainer: ViewContainerRef;
  @ViewChild('small', { static: true, read: ViewContainerRef }) smallNamesContainer: ViewContainerRef;

  public ngAfterContentInit(): void {
    this.largeNamesContainer.clear();
    this.smallNamesContainer.clear();
    
    this.children.forEach(child => {
      this.largeNamesContainer.createEmbeddedView(child.large);
      this.smallNamesContainer.createEmbeddedView(child.small);
    });
  }
}
