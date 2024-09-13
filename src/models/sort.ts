import { Persona } from "./persona.model";

export type SortType = 'asc' | 'desc';

export interface Sort {
  orderBy: keyof Persona;
  sort: SortType;
}
