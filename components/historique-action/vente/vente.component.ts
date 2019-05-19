import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VenteService} from '../../../services/vente.service';
import {Vente} from '../../../model/vente';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
id: any ;
// @ts-ignore
  private vente: Vente = new Vente() ;
  constructor(    private route: ActivatedRoute , private venteservice: VenteService, private messageService: MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('param');

  }
  add() {
    this.venteservice.save(this.vente , this.id).subscribe( data => {
      if (data.success) {
        this.messageService.add({severity: 'success', summary: data.message});

      } else {
        this.messageService.add({severity: 'warn', summary: data.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur ', detail: 'vente n\'est pas effectué' });
      console.log(ex);
    });
  }

}
