import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirmation-dialog.ts',
})
export class ConfirmationDialog {
    constructor(public dialogRef: MdDialogRef<ConfirmationDialog>) { }

    public confirmMessage: string;
}
