import { StyleSheet } from 'react-native';
import colors from 'app/styles/colors';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 40,
  },
  draggableIcon: {
    backgroundColor: colors.textGray,
  },
});

export default styles;
