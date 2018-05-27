import { Component, OnInit, ElementRef } from "@angular/core";
declare var jQuery:any;
import * as $ from "jquery";
@Component({
    selector:"my-jguery",
    template:`<button>Click ,e</button>`
})
export class JQueryComponent implements OnInit{

    constructor(private _elRef:ElementRef){}
    public ngOnInit()
    {
     
    }
}