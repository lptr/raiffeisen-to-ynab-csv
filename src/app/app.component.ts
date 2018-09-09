import { Component } from '@angular/core';

import { ReadFile, ReadMode } from 'ngx-file-helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raiffeisen-ynab-importer';
  readMode = ReadMode.arrayBuffer;

  constructor() {}

  onFileLoad(file) {
    var text = new TextDecoder('windows-1250').decode(file.content);
    console.log(text);
  }
}
