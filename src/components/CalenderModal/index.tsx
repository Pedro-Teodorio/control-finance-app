import React, { useState } from "react";
import {
  Container,
  FilterButton,
  FilterButtonText,
  ModalContent,
  TouchClose,
  TouchCloseView,
} from "./styles";
import { Modal } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import theme from "@/theme"
import { ptBR } from "./localeCalendar";

type Props = {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
  handleFilter: (dateSelected:Date) => void;
};

type markedDay = {
  selected: boolean;
  selectedColor: string;
  textColor: string;
};

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR'
export function CalenderModal({ isVisible, setVisible,handleFilter }: Props) {
  const [today, setToday] = useState(new Date());
  const [markedDates, setMarkedDates] = useState<markedDay>();

  const handleOnDayPress = (date: DateData) => {
    setToday(new Date(date.dateString));

    let marked: any = {};

    marked[date.dateString] = {
      selected: true,
      selectedColor: theme.COLORS.EMERALD_500,
      textColor: theme.COLORS.WHITE,
    };

    setMarkedDates(marked);
  };

  function handlerFilterDate (){
    handleFilter(today)
    setVisible(false)
  }
  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <Container>
        <TouchClose onPress={() => setVisible(false)}>
          <TouchCloseView />
        </TouchClose>
        <ModalContent>
          <Calendar
            onDayPress={handleOnDayPress}
            markedDates={markedDates}
            enableSwipeMonths={true}
            theme={{
              todayTextColor: theme.COLORS.EMERALD_500,
              selectedDayBackgroundColor: theme.COLORS.EMERALD_500,
              selectedDayTextColor: theme.COLORS.WHITE,
            }}
          />
          <FilterButton onPress={handlerFilterDate}>
            <FilterButtonText>Filtrar</FilterButtonText>
          </FilterButton>
        </ModalContent>
      </Container>
    </Modal>
  );
}
