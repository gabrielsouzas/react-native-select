import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: 31,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(225, 226, 223, 0.5)',
    paddingLeft: 5,
    fontSize: 16,
    height: 31,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingLeft: 0,
    paddingRight: 5,
    outlineWidth: 0,
    color: '#FFF',
    paddingBottom: 4,
    fontSize: 16,
    height: 31,
    outlineWidth: 0,
  },
  inputIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 16,
  },
  flatlist: {
    position: 'absolute',
    width: '100%',
    fontSize: 16,
    top: 31,
    left: 0,
    marginBottom: 2,
    maxHeight: 250,
    zIndex: 9999,
  },
  flatlistContainerStyle: {},
  flatlistItem: {},
  item: {
    backgroundColor: 'rgb(66 69 99)',
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
