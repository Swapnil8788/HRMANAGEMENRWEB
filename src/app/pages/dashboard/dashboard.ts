import { Component, inject } from '@angular/core';
import { Auth } from '@/app/services/auth';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { NotificationsWidget } from './components/notificationswidget';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '@/app/store/user/user.selector';

@Component({
  selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  auth = inject(Auth);
  private store = inject(Store)


  email$ = this.store.select(selectUserEmail);

  ngOnInit(){
    this.auth.getData().subscribe(data => {
      console.log(data);
    });
  }
}
