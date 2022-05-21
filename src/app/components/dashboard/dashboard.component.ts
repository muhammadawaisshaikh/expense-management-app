import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [];
  cards: any = [];
  features: any = [];
  review: any = [];


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

    this.features =[
      {
        id: 1,
        image: '../../../assets/img/choose1.png',
        name: 'Unlimited Database',
        text: 'Businesses can accommodate a very vast amount of data.',
      },
      {
        id: 2,
        image: '../../../assets/img/choose2.png',
        name: 'Bill Storage Facility',
        text: 'Take photo of bill and upload it in your phone.',
      },
      {
        id: 3,
        image: '../../../assets/img/choose3.png',
        name: 'SMS facility',
        text: 'Message customer to inform the credit/debit details.',
      },
      {
        id: 4,
        image: '../../../assets/img/choose4.png',
        name: 'Data Analytics',
        text: 'Data Analytics gives you a Competitive Advantage.',
      },
      {
        id: 5,
        image: '../../../assets/img/choose5.png',
        name: 'Daily/Monthly Reports',
        text: 'Easier to identify changes in trends, strategic long term forecasting.',
      },
      {
        id: 6,
        image: '../../../assets/img/choose6.png',
        name: 'Safe & Backed Up',
        text: 'All the data in cloud - Safe, Secure, Confidential.',
      }
    ]

    this.review =[
      {
        id: 1,
        text: 'Expense App is brilliant for my business and it actually matters. Its truly a one-stop thing for maintaining my Expense app.',
        image: './assets/img/man.jpg',
        name: 'Muhammad Yaseen',
      },
      {
        id: 2,
        text: 'We can never get transparency, insight and support for our money we get. Khata is an invaluable tool for us.',
        image: './assets/img/girl1.jpg',
        name: 'Fatima Qayoom',
      },
      {
        id: 3,
        text: 'The Expense app is so simple to use, and after a month I’ve already saved so much money.',
        image: './assets/img/man.jpg',
        name: 'Ayub Shaikh',
      },
      {
        id: 4,
        text: 'It’s a great way to remind customer to pay back their Udhaar. I also won free dinner at BurgerLab.',
        image: './assets/img/man.jpg',
        name: 'Farooq Ahmed',
      },
      {
        id: 5,
        text: 'Dropped chai in my udhaar register. Thank you Udhaar Boook for saving my ledger',
        image: './assets/img/man.jpg',
        name: 'Abdul Jabbar',
      },
      {
        id: 6,
        text: 'The Udhaar app is so simple to use, and after a month I’ve already saved so much money',
        image: './assets/img/man.jpg',
        name: 'Zain Abdullah',
      },
    ]

  }

}
