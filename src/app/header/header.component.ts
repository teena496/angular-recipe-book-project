
import { Component } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
    
})

export class HeaderComponent {

    @Output() componentSelectEmitter = new EventEmitter<string>();

    onSelect(componentSelected: string) {
        this.componentSelectEmitter.emit(componentSelected);
    }



}