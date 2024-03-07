import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('goal');
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    value={enteredGoalText}
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                          title="Add Goal" 
                          onPress={addGoalHandler}
                          color='grey'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                          title="Cancel" 
                          onPress={props.onCancel}
                          color='red'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})