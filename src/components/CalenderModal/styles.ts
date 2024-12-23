import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(9, 9, 11, 0.45);
`;

export const TouchClose = styled(TouchableWithoutFeedback)``;
export const TouchCloseView = styled.View`
  flex: 1;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  gap: 56px;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.EMERALD_500};
  padding: 16px;
  border-radius: 10px;
`;
export const FilterButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;
