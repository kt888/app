import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'select-transactions',
    templateUrl: './select-transactions.component.html'
    ,
    styleUrls: ['./app.component.css']
})

export class SelectTransactionsComponent {
    title = "Select Transactions";

    items: FirebaseListObservable<any[]>

    objects: FirebaseObjectObservable<any[]>;

    constructor(private router: Router, private af: AngularFire) {
        var urlValue = this.router.url;
        var u1 = urlValue.replace('/panchayat', '');
        var u2 = u1.replace('/jobcard', '');
        this.items = af.database.list(u2);
    }

    selectedItem: any;
    onSelect(item): void {
        this.selectedItem = item;
    }
}
