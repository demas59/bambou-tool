import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NotesService } from 'src/app/services/notes.service';
import Notes from 'src/classes/Notes';

@Component({
  selector: 'app-todo-list-tree',
  templateUrl: './todo-list-tree.component.html',
  styleUrls: ['./todo-list-tree.component.css'],
})
export class TodoListTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Notes>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Notes>();

  constructor(public notesService: NotesService) {}

  /** METHODS */

  getNotes(): void {
    this.notesService.getNotes().subscribe((notes) => {
      this.dataSource.data = notes;
      this.treeControl.dataNodes = notes;
    });
  }

  ngOnInit() {
    this.getNotes();
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: Notes) =>
    !!node.children && node.children.length > 0;
}
