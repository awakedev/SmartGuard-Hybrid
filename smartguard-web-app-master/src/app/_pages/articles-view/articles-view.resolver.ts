import { Injectable } from "@angular/core";
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable} from "rxjs/Observable";
import { DataService} from "../../_services/data.service";

@Injectable()
export class ArticleResolver implements Resolve<any> {
  constructor(private data: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.data.loadArticle(route.params.id);
  }
}