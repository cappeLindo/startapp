import { View, Text, StyleSheet, Button } from "react-native";

export default function Index() {
    return (
        <>   
            <View style={styles.container}>
                <Text style={styles.title}>Hello React Native!</Text>
            </View>

            <View style={styles.botao}>
                <Button title="clique aqui" onPress={() => {alert("o botão foi clicado")}}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: "center",
        alignItems: "center",
    },
    title: { 
        fontSize: 24,
        color: "#626262ff",
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "#d6d6d6ff",
        width: 240,
        height: 55,
        textAlignVertical: "center",
        borderRadius: 15,
    },
    botao: {
        position: "absolute",
        bottom: 50,
        flex:1,
        left: 0,
        right: 0,
        alignItems: "center",
        height: 120
    }
}) 