import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ICurrency } from 'app/shared/model/currency.model';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'jhi-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit, OnDestroy {
  currencies: ICurrency[];
  eventSubscriber: Subscription;

  constructor(protected currencyService: CurrencyService, protected eventManager: JhiEventManager) {}

  loadAll() {
    this.currencyService.query().subscribe((res: HttpResponse<ICurrency[]>) => {
      this.currencies = res.body;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInCurrencies();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ICurrency) {
    return item.id;
  }

  registerChangeInCurrencies() {
    this.eventSubscriber = this.eventManager.subscribe('currencyListModification', () => this.loadAll());
  }
}
