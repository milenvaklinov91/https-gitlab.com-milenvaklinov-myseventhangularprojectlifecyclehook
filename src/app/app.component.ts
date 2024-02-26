import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MySeventhAngularProjectLifecycleHook';

  inputText: string = '';
  destroy: boolean = true;

  OnSubmit(InputEl: HTMLInputElement){
    this.inputText = InputEl.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }
}
