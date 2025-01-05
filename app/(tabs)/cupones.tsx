import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function CuponesScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4CAF50', dark: '#1B5E20' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Cupones Disponibles</ThemedText>
        <ThemedView style={styles.cuponList}>
          {/* Aquí irá la lista de cupones */}
          <ThemedText>Próximamente: Lista de cupones eco-amigables</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cuponList: {
    marginTop: 20,
  },
});
