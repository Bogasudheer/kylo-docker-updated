import {Component, Input, OnInit} from "@angular/core";
import {Feed} from "../../../../model/feed/feed.model";
import {Step} from "../../../../model/feed/feed-step.model";
import {FormGroup} from "@angular/forms";
import {DefineFeedService} from "../../services/define-feed.service";
import {FormsModule} from '@angular/forms'
import {AbstractFeedStepComponent} from "../AbstractFeedStepComponent";
import {StateRegistry, StateService} from "@uirouter/angular";

@Component({
    selector: "feed-step-readonly-content",
    styleUrls: ["./define-feed-step-readonly-content.component.css"],
    template:`<ng-content></ng-content>`
})
export class DefineFeedStepReadonlyContentComponent  {

    @Input()
    public feed: Feed;

    @Input()
    public step : Step;

    constructor() {

    }



}