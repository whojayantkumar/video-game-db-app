import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchForm: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(),
    });
  }

  onSubmit() {
    this.router.navigate(['search', this.searchForm.value.search]);
  }
}
