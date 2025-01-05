import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const categorias = [
  'Productos Orgánicos',
  'Energía Renovable',
  'Reciclaje',
  'Transporte Sostenible',
  'Productos Eco-friendly',
  'Alimentación Saludable'
];

export default function CategoriasScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4CAF50', dark: '#1B5E20' }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Categorías</ThemedText>
        <ThemedView style={styles.categoriasList}>
          {categorias.map((categoria, index) => (
            <ThemedView key={index} style={styles.categoriaItem}>
              <ThemedText type="subtitle">{categoria}</ThemedText>
            </ThemedView>
          ))}
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
  categoriasList: {
    marginTop: 20,
  },
  categoriaItem: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
});
