import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [];
  cards: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        image: '../../../assets/img/service1.png',
        name: 'Data Storage',
        text: 'Maintain credit & debit history in the cloud.',
      },
      {
        id: 2,
        image: '../../../assets/img/service2.png',
        name: 'Data Tracking',
        text: 'Make & view transactions. Store & retrieve transaction record.',
      },
      {
        id: 3,
        image: '../../../assets/img/service3.png',
        name: 'Connect with your Customers',
        text: 'SMS facility to share the credit/debit details with the customers',
      },
      {
        id: 4,
        image: '../../../assets/img/service4.png',
        name: 'Create account of customers',
        text: 'Edit Customer Information, Manage & view Customer details.',
      },
      {
        id: 5,
        image: '../../../assets/img/service5.png',
        name: 'Report & Analytics',
        text: 'View clean, crisp reports that are easy to read & understand.',
      },
      {
        id: 6,
        image: '../../../assets/img/service6.png',
        name: 'Remark writing facility',
        text: 'You can write details of the transactions.',
      }
    ]

    this.cards =[
      {
        id: 1,
        image: '../../../assets/img/service7.png',
        name: 'View Transactions',
        text: 'Check your credit & debit history in the cloud.',
      },
      {
        id: 2,
        image: '../../../assets/img/service8.png',
        name: 'Data Tracking',
        text: 'Track your transaction records view Expense details on the move',
      },
      {
        id: 3,
        image: '../../../assets/img/service9.png',
        name: 'Account Status Tracking',
        text: 'Track your account status on phone convenient safe easy to use',
      }
    ]
  }

}
