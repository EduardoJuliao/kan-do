import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MessageService {

    constructor(private messageService: Ng2IzitoastService,
        private translateService: TranslateService) {
            this.messageService.settings({
                position: 'topCenter'
            })
    }

    public success(message: string, title?: string): void {
        this.messageService.success({
            message: message,
            title: title || this.translateService.instant("MESSAGE.SUCCESS")
        });
    }

    public warning(message: string, title?: string): void {
        this.messageService.success({
            message: message,
            title: title || this.translateService.instant("MESSAGE.WARNING")
        });
    }

    public error(message: string, title?: string): void {
        this.messageService.success({
            message: message,
            title: title || this.translateService.instant("MESSAGE.ERROR")
        });
    }

    public info(message: string, title?: string): void {

        this.messageService.success({
            message: message,
            title: title || this.translateService.instant("MESSAGE.INFO")
        });
    }

    private hideInstance(instance, toast): void {
        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
    }

    public ask(settings: IAskSettings): void {
        let okButton: string = settings.ok || this.translateService.instant("MESSAGE.ASK.OK");
        let cancelButton: string = settings.cancel || this.translateService.instant("MESSAGE.ASK.CANCEL");

        this.messageService.question({
            message: settings.message,
            timeout: 0,
            title: settings.title || this.translateService.instant("MESSAGE.ASK.TITLE"),
            buttons: [
                [`<button><b>${okButton}</b></button>`, (instance, toast) => {
                    if (settings.onOk != undefined && typeof (settings.onOk) == "function") {
                        settings.onOk();
                    }
                    this.hideInstance(instance, toast);
                }],
                [`<button>${okButton}</button>`, (instance, toast) => {
                    if (settings.onCancel != undefined && typeof (settings.onCancel) == "function") {
                        settings.onCancel();
                    }
                    this.hideInstance(instance, toast);
                }]
            ]
        });
    }
}

export interface IAskSettings {
    message: string;
    title?: string;
    onOk?: () => void;
    onCancel?: () => void;
    ok?: string;
    cancel?: string;
}