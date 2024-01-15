import { StyleSheet } from 'react-native';

export const boardStyles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 20,
    marginRight: -1,
    marginTop: -1,
    minWidth: 50,
    minHeight: 50,
  },
  row: {
    flexDirection: 'row',
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  }
});
