import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function PerfilScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4CAF50', dark: '#1B5E20' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Mi Perfil</ThemedText>
        <ThemedView style={styles.profileInfo}>
          <ThemedText type="subtitle">Información Personal</ThemedText>
          <ThemedText>Configura tu perfil y preferencias</ThemedText>
        </ThemedView>
        <ThemedView style={styles.statsContainer}>
          <ThemedText type="subtitle">Mis Estadísticas</ThemedText>
          <ThemedText>Cupones Canjeados: 0</ThemedText>
          <ThemedText>Impacto Ambiental: 0 kg CO₂ ahorrados</ThemedText>
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
  profileInfo: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  statsContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
});
