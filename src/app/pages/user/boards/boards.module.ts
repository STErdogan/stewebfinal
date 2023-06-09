import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardsPageRoutingModule } from './boards-routing.module';

import { BoardsPage } from './boards.page';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardsPageRoutingModule,
    SharedModule
  ],
  declarations: [BoardsPage]
})
export class BoardsPageModule {}
