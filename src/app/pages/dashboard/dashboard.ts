import { Component, inject } from '@angular/core';
import { Auth } from '@/app/services/auth';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { NotificationsWidget } from './components/notificationswidget';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '@/app/store/user/user.selector';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-dashboard',
  imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget, ToastModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',

})
export class Dashboard {
  auth = inject(Auth);
  private store = inject(Store)


  email$ = this.store.select(selectUserEmail);
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    console.log("email$", this.email$)
    console.log("Dashboard component initialized");
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login successful'
    });

    this.auth.getRoles().subscribe((roles: any) => {
      console.log("roles", roles);
    });

  }
  onClick() {
    this.auth.getRoles().subscribe((roles: any) => {
      console.log("roles", roles);
    });
  }
}
