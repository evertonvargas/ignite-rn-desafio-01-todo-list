import { StyleSheet } from "react-native";

const input = {
  flex: 1,
  backgroundColor: "#262626",
  height: 56,
  borderRadius: 5,
  color: '#fff',
  padding: 16,
  fontSize: 16,
  marginRight: 8,
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flex: 1
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 65
  },
  iconrocket:{
    marginTop: 5,
    marginRight: 5
  },
  to: {
    fontSize: 45,
    color: '#4EA8DE',
    fontWeight: 'bold'
  },
  do: {
    fontSize: 45,
    color: '#5E60CE',
    fontWeight: 'bold'
  },
  content:{
    flex: 1,
    padding: 24,
    backgroundColor: '#1A1A1A',
  },
  box:{
    position: 'relative',
  },
  buttonAdd: {
    flexDirection: 'row',
    width: "100%",
    position: 'absolute',
    top: -53,
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    ...input
  },
  inputBorder:{
    ...input,
    borderColor: '#5E60CE',
    borderWidth: 1
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  info:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: 32,
    marginBottom: 20
  },
  title:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  created:{
    color: '#4EA8DE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  completed:{
    color: '#5E60CE',
    fontSize: 18,
    fontWeight: 'bold'
  },
  numberTasks:{
    backgroundColor: '#333333',
    color: '#fff', 
    marginLeft: 8,
    width: 30,
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  listEmpytText:{
    borderTopWidth: 2,
    borderColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  titleEmpytOne:{
    fontSize: 16,
    color: "#808080",
    fontWeight: 'bold',
    marginTop: 15
  },
  titleEmpytTwo:{
    fontSize: 16,
    color: "#808080"
  }
})