import { Component } from '@angular/core';
import { INavigationMenuBtn } from '../../core/interfaces/ux/NavigationMenuBtn.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigation-menu',
  imports: [RouterLink],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
})
export class NavigationMenu {
  navigationButtons: INavigationMenuBtn[] = [
    {
      icon: "fa fa-home",
      label: "Home",
      navigationPath: 'home'
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      label: "Explore",
      navigationPath: 'products'
    },
    {
      icon: "fa-solid fa-arrow-right-from-bracket",
      label: "Salir",
      navigationPath: 'close-session'
    }
  ]
}
