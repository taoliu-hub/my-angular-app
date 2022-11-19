import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-with-multiselect-dropdown',
  templateUrl: './working-with-multiselect-dropdown.component.html',
  styleUrls: ['./working-with-multiselect-dropdown.component.css']
})
export class WorkingWithMultiselectDropdownComponent implements OnInit {

  selectLevelList = [];
  levelDropDownList = [{value:'SECONDARY 1'},{value:'SECONDARY 2'},{value:'SECONDARY 3'},{value:'SECONDARY 4'},{value:'SECONDARY 5'}];

  levelDropdownSettings = {
    itemsShowLimit: 3,
    selectAllText: 'All Levels',
    unSelectAllText: 'All Levels',
    allowSearchFilter: true,
    singleSelection: false,
    idField: "value",
    textField: "value",
    enableSelectedAllLabelText: true,
    selectAllLebelText: 'All Levels',
  }

  constructor() { }

  ngOnInit(): void {
  }


  onLevelSelect(event : any){
    console.log(event);
  }

  onLevelSelectAll(event : any){
    console.log(event);
  }

  onLevelSelectDeSelect(event : any){
    console.log(event);
  }

  onLevelSelectDeAll(event : any){
    console.log(event);
  }


}
