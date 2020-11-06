import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = 'en';

  constructor(private translate: TranslateService) {
    translate.use(this.lang);
  }

  onLangChange(newLang: string): void {
    this.lang = newLang;

    this.translate.use(newLang);
  }
}
