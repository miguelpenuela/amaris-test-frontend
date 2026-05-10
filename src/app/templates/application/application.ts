import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../layout/header/header";
import { Footer } from "../../layout/footer/footer";
import { NavigationMenu } from "../../layout/navigation-menu/navigation-menu";

@Component({
  selector: 'app-application',
  imports: [RouterOutlet, Header, Footer, NavigationMenu],
  templateUrl: './application.html',
  styleUrl: './application.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Application {

}
