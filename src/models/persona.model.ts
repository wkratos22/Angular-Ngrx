export interface Persona {
  id: string;
  nome: string;
  cognome: string;
  dataNascita: string;
  sesso: boolean;
}

export const createPersona = () =>
  ({
    nome: '',
    cognome: '',
  } as Persona);

export const isEditing = (persona: Persona | undefined) =>
  persona && Object.keys(persona).length > 0;
