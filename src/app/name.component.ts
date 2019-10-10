import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent  {
  @Input() public name: string;
  @ViewChild('large', { static: true, read: TemplateRef }) public large: TemplateRef<any>;
  @ViewChild('small', { static: true, read: TemplateRef }) public small: TemplateRef<any>;
}
