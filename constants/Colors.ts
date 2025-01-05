/**
 * Colores principales de EcoCupon. Usando una paleta de colores verdes y eco-amigables.
 */

const tintColorLight = '#4CAF50';  // Verde principal
const tintColorDark = '#81C784';   // Verde más claro para modo oscuro

export const Colors = {
  light: {
    text: '#2E7D32',              // Verde oscuro para texto
    background: '#F1F8E9',        // Verde muy claro para fondo
    tint: tintColorLight,
    icon: '#388E3C',             // Verde medio para iconos
    tabIconDefault: '#689F38',    // Verde oliva para iconos inactivos
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#C8E6C9',             // Verde claro para texto
    background: '#1B5E20',        // Verde muy oscuro para fondo
    tint: tintColorDark,
    icon: '#81C784',             // Verde medio claro para iconos
    tabIconDefault: '#66BB6A',    // Verde medio para iconos inactivos
    tabIconSelected: tintColorDark,
  },
};
