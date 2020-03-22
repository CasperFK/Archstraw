import React from 'react';
import { Wrapper, Title, Features, ListItem } from './styles/styles';

const MainPage = () => {
  return (
    <Wrapper>
      <Title>Strona główna</Title>
      <Features>
        Funkcjonalności
        <ListItem>
          <Features>
            Pracownik:
            <ListItem>- dodawanie</ListItem>
            <ListItem>- usuwanie</ListItem>
            <ListItem>- edytowanie</ListItem>
            <ListItem>- archiwizowanie</ListItem>
            <ListItem>- wyszukiwanie</ListItem>
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            Dzień roboczy:
            <ListItem>- dodawanie pracownika</ListItem>
            <ListItem>- stawka dnia, z łubianki</ListItem>
            <ListItem>- data dnia pracy</ListItem>
            <ListItem>
              - aktualizowanie stanu łubianek pracownika, możliwość tylko
              dodawania
            </ListItem>
            <ListItem>- czas pracy, początek koniec</ListItem>
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            Wyszukiwanie pracownika po:
            <ListItem>- nr. telefonu</ListItem>
            <ListItem>- nazwisku</ListItem>
            <ListItem>- dacie pracy</ListItem>
            <ListItem>- wynagrodzeniu dziennym/całkowitym</ListItem>
            <ListItem>- ilości nazbieranych łubianek</ListItem>
            <ListItem>- ilości łubianek nazbieranych miesięcznie</ListItem>
            <ListItem>- przepracowanych godzinnach dziennie</ListItem>
            <ListItem>- przepracowanych godzinnach miesięcznie</ListItem>
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            Statystyka:
            <ListItem>
              - wykres przedstawiający ilość zebranych łubianek dziennie
            </ListItem>
            <ListItem>
              - wykres przedstawiający ilość pieniędzy zapłaconych pracownikom
              danego aktualnego dnia
            </ListItem>
            <ListItem>
              - wykres przedstawiający wydajność pracowników, stosunek liczby
              pracowników do nazbieranych łubianek
            </ListItem>
          </Features>
        </ListItem>
      </Features>
    </Wrapper>
  );
};

export default MainPage;
