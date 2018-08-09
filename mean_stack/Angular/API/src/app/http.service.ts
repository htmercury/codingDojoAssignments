import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string,
  abilities: Array<Ability>,
  types: Array<Type>
}

interface Type {
  type: TypeInfo
}

interface TypeInfo {
  name: string
}

interface Ability {
  ability: AbilityInfo;
}

interface AbilityInfo {
  url: string,
  name: string
}

interface AbilityDetail {
  name: string,
  pokemon: Array<object>
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

   getPokemon() {
     console.log('Searching...');
     let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
     tempObservable.subscribe((data: Pokemon) => {
       console.log(data.name);
       let result = `${data.name} has type(s): `;
       for (let entry of data.types) {
         result += `${entry.type.name} `;
       }
       console.log(result);
       for (let entry of data.abilities) {
         console.log(`${data.name} knows ${entry.ability.name}!`);
         this.getPokemonWithAbility(entry.ability.url);
       }
     })
   }

   getPokemonWithAbility(url) {
    let tempObservable = this._http.get(url);
    tempObservable.subscribe((data: AbilityDetail) => {
      console.log(`${data.name}: ${data.pokemon.length} other pokemon also knows this!`);
   })


}
