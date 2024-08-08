import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonContainer: {
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      width: '80%', // Para que los botones sean más anchos pero no ocupen todo el ancho
    },
    buttonImage1: {
      backgroundColor: '#FF5722', // Color naranja para el botón "Imagen 1"
    },
    buttonImage2: {
      backgroundColor: '#03A9F4', // Color azul para el botón "Imagen 2"
    },
    buttonGreaterOrEqual: {
      backgroundColor: '#8BC34A', // Color verde para el botón "Mayor o Igual"
    },
    buttonLessOrEqual: {
      backgroundColor: '#FFC107', // Color amarillo para el botón "Menor o Igual"
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EDE7F6',
      padding: 20,
    },
    input: {
      height: 50,
      borderColor: '#4bd0f2',
      borderWidth: 2,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginVertical: 10,
      backgroundColor: '#F3E5F5',
    },
    image: {
      width: 250,
      height: 250,
      marginBottom: 30,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#f47b35',
      resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        marginBottom: 20, 
        textAlign: 'center', 
        color: '#4527A0', 
        fontWeight: 'bold',
        textShadowColor: '#9E9E9E', 
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 1,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
      },
  });