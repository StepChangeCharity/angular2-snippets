import { Injector, Injectable, Inject, EventEmitter } from 'angular2/angular2';
import { HTTP_BINDINGS, Http, RequestOptions, Response, Headers } from 'angular2/http';
import { Toaster, ToasterType } from "../models/toaster";
import { Command } from "../models/command";

export class CommsService {
	
	//
	// In theory we could have one pipeline for all messages and then use "instanceof" to differentiate
	// For illustration purposes I think multiple pipelines work best
	//
	created: Date = new Date();
	toasterPipeline: EventEmitter<Toaster> = null;
	apiPipeline: EventEmitter<Command> = null;
	
	constructor() {
		this.toasterPipeline = new EventEmitter<Toaster>();
		this.apiPipeline = new EventEmitter<Command>();
	}

}