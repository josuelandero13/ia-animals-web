# Identificador de Animales - Proyecto Web 🐾

## Descripción del Proyecto
El Identificador de Animales es una aplicación web minimalista e interactiva que permite a los usuarios subir imágenes de animales para obtener información detallada sobre ellos. Utilizando inteligencia artificial en el navegador, la aplicación identifica el animal y muestra características como su tipo, si es venenoso, hábitat natural, dieta y una descripción detallada.

## Características Principales
- 🖼️ Subida intuitiva de imágenes mediante arrastrar y soltar o selección manual
- 🤖 Reconocimiento en tiempo real usando TensorFlow.js y MobileNet
- 🐍 Detección de animales venenosos con indicadores visuales claros
- 📱 Diseño completamente responsive que funciona en móviles y desktop
- 🎨 Interfaz minimalista con animaciones fluidas
- 💾 Funcionamiento 100% en el navegador sin necesidad de servidor
- 🧠 Base de datos integrada con información de más de 10 animales

## Tecnologías Utilizadas
| Tecnología          | Función                                        |
|---------------------|------------------------------------------------|
| TensorFlow.js       | Biblioteca de machine learning para reconocimiento de imágenes |
| MobileNet           | Modelo preentrenado para clasificación de imágenes |
| HTML5 & CSS3        | Estructura y diseño de la interfaz de usuario  |
| JavaScript Vanilla  | Lógica de la aplicación e interacciones        |
| FileReader API      | Lectura de imágenes desde el dispositivo del usuario |
| Drag and Drop API   | Funcionalidad de arrastrar y soltar archivos   |

## Cómo Funciona
1. **Sube una imagen** de un animal:
   - Haz clic en el área designada
   - O arrastra y suelta una imagen
   *(Vista previa de la imagen seleccionada)*
2. **Analiza la imagen** con el botón "Analizar Imagen"
3. **Obtén resultados**:
   - Nombre del animal identificado
   - Precisión de la identificación
   - Tipo de animal (mamífero, reptil, etc.)
   - Indicación si es venenoso
   - Hábitat natural
   - Tipo de dieta
   - Descripción detallada
   - Imagen representativa

## Estructura del Proyecto
```text
animal-identifier/
├── src/                # Directorio de código fuente
│   ├── assets/         # Directorio de recursos estáticos
│   │   ├── images/     # Carpeta de imágenes
│   │   └── styles/     # Carpeta de estilos CSS
│   ├── app.js          # Archivo principal de JavaScript
├── index.html          # Archivo principal HTML
└── README.md           # Este archivo de documentación
- 🧠 Mocks de datos de animales
```