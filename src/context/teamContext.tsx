import { ReactNode, createContext, useState } from "react";
import { CharacterProps } from "../components/Character";

interface teamContextData {
  team: CharacterProps[];
  handleClickToAddCharacter: (characterToAdd: CharacterProps) => void;
}

interface teamProviderProps {
  children: ReactNode;
}

export const teamContext = createContext({} as teamContextData);

export function TeamProvider({ children }: teamProviderProps) {
  const [team, setTeam] = useState<CharacterProps[]>([]);

  function handleClickToAddCharacter(characterToAdd: CharacterProps) {
    const verifyIfCharacterExists = team.findIndex(
      (character) => character.id === characterToAdd.id
    );

    if (verifyIfCharacterExists >= 0) {
      // remove the character of team

      const teamFilteredArray = team.filter(
        (character) => character.id !== characterToAdd.id
      );

      setTeam(teamFilteredArray);
    } else {
      // add the character to the team

      setTeam([...team, characterToAdd]);
    }
  }

  return (
    <teamContext.Provider value={{ team, handleClickToAddCharacter }}>
      {children}
    </teamContext.Provider>
  );
}
