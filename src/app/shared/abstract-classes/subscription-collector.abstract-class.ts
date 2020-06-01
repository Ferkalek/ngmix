import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class ASubscriptionCollector implements OnDestroy {

    protected _subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

}
