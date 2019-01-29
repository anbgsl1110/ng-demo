import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {USERNAME} from "../../services/local-storage/local-storage.namespace";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  username: string;

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(
    private store: LocalStorageService,
    private router: Router)
  { }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
  }

  goSetting() {
    this.router.navigateByUrl('/setting');
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  /**
   * 路由方式添加tab
   */
  tabs(data) {
    this.router.navigate([{outlets: { popup: data }}]);
  }

}
