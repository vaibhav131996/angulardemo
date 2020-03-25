import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './parent';
import { ChildComponent } from   '../child/Child';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ParentComponent,ChildComponent ],
  exports:      [ ParentComponent,ChildComponent ],
  bootstrap:    [ ParentComponent,ChildComponent ]
})


export class ParentModule{

}