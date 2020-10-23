import { Component, OnInit } from '@angular/core';
import { EnrolleService } from './enrolle.service';
import { Result, UpdateDb, Data } from './EnrolleInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 enrolleData: Result[];
 config: any;
 updateObject: UpdateDb = {
   active : undefined,
   name : undefined
 };

  constructor(
    private enrolleService: EnrolleService
  ) { }

  ngOnInit(): void {
    this.getEnrolleResponse();
    console.log(this.updateObject.active = true);
  }

  private getEnrolleResponse(): void {
    this.enrolleService.getEnrolles().subscribe(
      (response) => {
        if (response){
          this.enrolleData = response;
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
          };
        }
        else{
          console.log( "No enrolles Available")
        }
      },
      () => {
        console.log( "Error in calling the service")
      }
    );
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  change( name, Id, active, index ){
    this.updateObject.name = name;
    this.updateObject.active = active;
    this.enrolleService.UpdateNameOrStatus(Id, this.updateObject).subscribe(
      (data) => {
        this.enrolleData[index].name = name;
      },
      () => {
        console.log( "Error in calling the service")
      }
    )};

changeStatus( name, Id, active, index ) {
  this.updateObject.name = name;
  this.updateObject.active = !active;
  this.enrolleService.UpdateNameOrStatus(Id, this.updateObject).subscribe(
    (data) => {
      this.enrolleData[index].active = !active;
    },
    () => {
      console.log( "Error in calling the service")
    }
  );
}
pageChanged(event){
  this.config.currentPage = event;
}
}
