import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  myEvents: Event[] = [
    {name: 'Name3',
    date: 'Date3',
    time: 'Time3',
    location : {
      address: 'Address3',
      city: 'City3',
      country: 'Country3'
    }},
    {name: 'Name1',
    date: 'Date1',
    time: 'Time1',
    location : {
      address: 'Address1',
      city: 'City1',
      country: 'Country1'
    }},
    {name: 'Name2',
    date: 'Date2',
    time: 'Time2',
    location : {
      address: 'Address2',
      city: 'City2',
      country: 'Country2'
    }}]

  constructor() { }

  getAll(): Event[] {
    return this.myEvents
  }
}
