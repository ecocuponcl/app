import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeHero = () => {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/56979540471');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brand}>EcoCupon</Text>
      </View>

      {/* Navigation */}
      <View style={styles.nav}>
        <Link href="/" style={styles.navLink}>Inicio</Link>
        <Link href="/create-coupon" style={styles.navLink}>Crear Cupón</Link>
        <Link href="/scan" style={styles.navLink}>Escanear</Link>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>EcoCupon</Text>
        <Text style={styles.heroSubtitle}>
          Haz tus acciones ecológicas realidad y obtiene beneficios de ello - Solo en Chile
        </Text>
      </View>

      {/* Features */}
      <View style={styles.features}>
        <View style={styles.feature}>
          <Ionicons name="qr-code-outline" size={48} color="#4CAF50" />
          <Text style={styles.featureTitle}>Crear Cupón</Text>
          <Text style={styles.featureText}>
            Genera códigos QR para tus cupones ecológicos y compártelos fácilmente.
          </Text>
        </View>

        <View style={styles.feature}>
          <Ionicons name="scan-outline" size={48} color="#4CAF50" />
          <Text style={styles.featureTitle}>Canjea tu premio</Text>
          <Text style={styles.featureText}>
            Escanea códigos QR y verifica la validez de los cupones al instante.
          </Text>
        </View>
      </View>

      {/* WhatsApp Button */}
      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
        <Ionicons name="logo-whatsapp" size={24} color="#fff" />
        <Text style={styles.whatsappText}>Contactar por WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  navLink: {
    fontSize: 16,
    color: '#333',
    textDecorationLine: 'none',
  },
  hero: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  feature: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  featureText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  whatsappText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
});

export default HomeHero;
