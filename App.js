import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';

import Goalitem from './components/Goalitem'
import Goalinput from './components/Goalinput'
export default function App() {

  
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false); 
    
  

  const addGoalHandler = goalTitle =>{
    setCourseGoals(currentGoal => [...courseGoals,
      {id:Math.random().toString(),value:goalTitle}
    ]);
      setIsAddMode(false);
  };

  const removeGoalHandler= goalId=> {
    setCourseGoals(currentGoal=>{
      return currentGoal.filter((goal)=> goal.id!== goalId);
    });
  }

  const CancelGoalAddHandler=()=>{
   setIsAddMode(false); 
  }

  return ( 
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL!" onPress={()=>setIsAddMode(true)}/>
      {/* <StatusBar style="auto" On /> */}
      <Goalinput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={CancelGoalAddHandler}/>
      <FlatList
      keyExtractor={(item,index)=>item.id} 
      data={courseGoals} 
      renderItem={
        itemData =><Goalitem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
        
      } 
      />
      </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding:50
},
});
