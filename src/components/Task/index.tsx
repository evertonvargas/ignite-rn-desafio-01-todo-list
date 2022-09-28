import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from "./styles";
import { Tasks } from "../../screens/Home";

interface TaskProps {
  data: Tasks;
  onRemove: (id: string, checkBoxState: boolean) => void;
  tasksCompleted: number;
  setTasksCompleted: (num: number) => void;
}

export function Task({
  data,
  onRemove,
  tasksCompleted,
  setTasksCompleted,
}: TaskProps) {
  const [checkBoxState, setCheckBoxState] = useState(false);

  function handleCheckbox() {
    !checkBoxState
      ? setTasksCompleted(tasksCompleted + 1)
      : setTasksCompleted(tasksCompleted - 1);
    setCheckBoxState(!checkBoxState);
  }

  function handleRemove() {
    onRemove(data.id, checkBoxState);
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor={checkBoxState ? "#5E60CE" : "#4EA8DE"}
        unfillColor="#262626"
        text={data.task}
        isChecked={checkBoxState}
        onPress={handleCheckbox}
        innerIconStyle={{ borderWidth: 2 }}
        disableBuiltInState
        textStyle={
          checkBoxState
            ? { color: "#383838" }
            : { color: "#fff", flexWrap: "wrap" }
        }
        style={styles.checkBox}
      />
      <TouchableOpacity style={styles.delete} onPress={handleRemove}>
        <EvilIcons name="trash" size={30} color="#383838" />
      </TouchableOpacity>
    </View>
  );
}
