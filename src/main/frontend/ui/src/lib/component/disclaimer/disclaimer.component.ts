import { Component } from '@angular/core';
import { Disclaimer } from '@frontend/data';

@Component({
  selector: 'frontend-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent {
  disclaimers: Disclaimer[] = [];

  constructor() {
    this.disclaimers.push({
      title: 'DISCLAIMER.BODY.LIMITATION_INTERNAL.TITLE',
      text: 'DISCLAIMER.BODY.LIMITATION_INTERNAL.TEXT',
    });
    this.disclaimers.push({
      title: 'DISCLAIMER.BODY.LIMITATION_EXTERNAL.TITLE',
      text: 'DISCLAIMER.BODY.LIMITATION_EXTERNAL.TEXT',
    });
    this.disclaimers.push({
      title: 'DISCLAIMER.BODY.COPYRIGHT.TITLE',
      text: 'DISCLAIMER.BODY.COPYRIGHT.TEXT',
    });
    this.disclaimers.push({
      title: 'DISCLAIMER.BODY.PROTECTION.TITLE',
      text: 'DISCLAIMER.BODY.PROTECTION.TEXT',
    });
  }
}
