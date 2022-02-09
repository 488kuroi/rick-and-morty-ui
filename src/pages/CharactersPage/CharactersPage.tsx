import React, { FC } from 'react';


interface CharactersPageProps {}

const CharactersPage: FC<CharactersPageProps> = () => (
  <div data-testid="CharactersPage" className={`Page Page_characters`}>
    CharactersPage Component
  </div>
);

export default CharactersPage;
