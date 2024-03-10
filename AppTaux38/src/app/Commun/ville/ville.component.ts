import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Ville } from "../../module/ville";
import { VilleService } from "../../service/ville.service";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
})
export class VilleComponent implements OnInit {
  public listVille!: Observable<Ville>

  constructor(private villeService: VilleService) {
  }

  ngOnInit(): void {
    this.loadVilles();
  }

  loadVilles():Observable<Ville> | null {
    this.listVille=  this.villeService.getVilles();
    return null;
  }

  handleDeleteVille(villeId: string) {
    this.villeService.deleteVille(villeId).subscribe({
      next: () => {
        // Si la suppression est réussie, recharger la liste des villes
        this.loadVilles();
      },
      error: (err: any) => {
        console.log(err);
        // Gérer l'erreur de suppression
      }
    });
  }
}
