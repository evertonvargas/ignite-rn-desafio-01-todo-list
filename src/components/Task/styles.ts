import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 16,
    marginBottom: 8,
    padding: 18,
    flex: 1, 
    width: "100%"
  },
  delete:{
    marginLeft: 15,
    height: "100%",
    justifyContent: "center"
  },
  checkBox:{
    width: '80%',
  }
})