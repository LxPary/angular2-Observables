/**
 * Created by AHREN on 04/08/2016.
 */
/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import { CommentFormComponent } from './comment-form.component'
import { CommentListComponent } from './comment-list.component'
import {EmitterService} from '../../emitter.service';

@Component({
    selector: 'comment-widget',
    template: `
        <div>
            <comment-form [listId]="listId" [editId]="editId"></comment-form>
            <comment-list [listId]="listId" [editId]="editId"></comment-list>
        </div>
    `,
    directives: [CommentListComponent, CommentFormComponent],
    providers: [EmitterService]
})
export class CommentComponent {
    // Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';
}