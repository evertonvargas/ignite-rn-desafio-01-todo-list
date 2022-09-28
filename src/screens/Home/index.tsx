import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Alert,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { styles } from "./styles";
import { Task } from "../../components/Task";

export interface Tasks {
  id: string;
  task: string;
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function handleAddTask() {
    const data = {
      id: String(new Date().getTime()),
      task,
    };
    setTasks([...tasks, data]);
    setTask("");
    Keyboard.dismiss();
  }

  function handleRemoveTask(id: string, checkBoxState: boolean) {
    Alert.alert("Remover", `Deseja apagar esta tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter((item) => item.id !== id));
          if (checkBoxState) setTasksCompleted(tasksCompleted - 1);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Ionicons
          name="rocket-outline"
          size={40}
          color="#4EA8DE"
          style={styles.iconrocket}
        />
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.box}>
          <View style={styles.buttonAdd}>
            <TextInput
              style={isFocused ? styles.inputBorder : styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#808080"
              selectionColor="#fff"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={setTask}
              value={task}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
              <AntDesign name="pluscircleo" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.title}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.numberTasks}>{tasks.length}</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.numberTasks}>{tasksCompleted}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              data={item}
              onRemove={handleRemoveTask}
              tasksCompleted={tasksCompleted}
              setTasksCompleted={setTasksCompleted}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpytText}>
              <MaterialCommunityIcons
                name="file-document-edit-outline"
                size={70}
                color="#383838"
              />
              <Text style={styles.titleEmpytOne}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.titleEmpytTwo}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
