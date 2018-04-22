import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BdService{

    http:any;

    academicoUrl: String;
    servicoUrl: String;
    alimentacaoUrl: String;
    transporteUrl: String;
    infraestruturaUrl: String;

    constructor (http:Http){
      this.http = http;
      this.alimentacaoUrl = "http://aqueous-waters-67532.herokuapp.com/api/alimentacao_api";
      this.academicoUrl = "http://aqueous-waters-67532.herokuapp.com/api/academico_api";
      this.servicoUrl = "http://aqueous-waters-67532.herokuapp.com/api/servico_api";
      this.transporteUrl = "http://aqueous-waters-67532.herokuapp.com/api/transporte_api";
      this.infraestruturaUrl = "http://aqueous-waters-67532.herokuapp.com/api/infraestrutura_api";
    }

    getAlimentacaoData(){
      return this.http.get(this.alimentacaoUrl).map(res => res.json());
    }

    getTransporteData(){
      return this.http.get(this.transporteUrl).map(res => res.json());
    }

    getAcademicoData(){
      return this.http.get(this.academicoUrl).map(res => res.json());
    }

    getServicoData(){
      return this.http.get(this.servicoUrl).map(res => res.json());
    }

    getInfraestruturaData(){
      return this.http.get(this.infraestruturaUrl).map(res => res.json());
    }

    conjunction (x, y) {
        return x & y
    }

    filterItems(items, searchTerm) {

      return items.filter((item) => {
        let resultado = item[0].nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        return resultado;
      });

    }
}
