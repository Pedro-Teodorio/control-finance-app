import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.EMERALD_500};
height: 20%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
 
`;

export const GreetingSection = styled.View`
  background-color: ${({ theme }) => theme.COLORS.EMERALD_500};
  flex-direction: row;
  gap: 12px;
`;

export const UserInitial = styled.View`
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50%;
`;

export const Initial = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Greeting = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;

export const Content = styled.View`
 flex: 1;
 padding: 16px;
 gap: 24px;
`