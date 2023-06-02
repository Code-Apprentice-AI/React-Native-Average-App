import { StyleSheet, Dimensions } from 'react-native';
// import { screenWidth, ScreenHeigth } from './Average';
export const screenWidth = Dimensions.get("window").width;
export const ScreenHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLabel: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    marginBottom: 20,
    width: screenWidth - 40,
    height: ScreenHeigth * 0.08,
    fontSize: 24,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 18,
    borderColor: '#fff',
  },
  buttonContainer: {
    width: screenWidth - 40,
    height: ScreenHeigth * 0.08,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f3f3f3',
  },
  buttonContainer1: {
    width: 180,
    height: 68,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  button1: {
    borderRadius: 10,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f3f3f3',
  },

  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 500,
    // marginBottom: 10,
    alignSelf: "center",
    // textTransform: "uppercase",
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 700,
  },
  display: {
    width: screenWidth - 40,
    minHeight: '20%',
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#000000',
    borderRadius: 18,
    backgroundColor: '#ffffff',
  },
  displays: {
    width: screenWidth - 40,
    height: '20%',
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#000000',
    borderRadius: 18,
    backgroundColor: '#d4d4d4',
  },
  textStyle: {
    marginHorizontal: 20,
    marginBottom: 4,

    fontSize: 24,
    color: '#ffffff',
    fontWeight: 700,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  gradient: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 18,
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
  },
});

export default styles;
