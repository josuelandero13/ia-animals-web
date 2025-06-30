import { animalDatabase } from "./mocks/animalDatabase.js";

// Elementos del DOM
let uploadArea,
  uploadBtn,
  fileInput,
  previewSection,
  previewImage,
  analyzeBtn,
  resetBtn;
let loading, resultsSection, errorDiv, uploadSection;
let animalName, animalIcon, animalConfidence, animalType, animalVenomous;
let animalHabitat, animalDiet, animalDescription, animalImagePlaceholder;

// Cargar el modelo de MobileNet
let model;

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  // Asignar elementos del DOM
  uploadArea = document.getElementById("uploadArea");
  uploadBtn = document.getElementById("uploadBtn");
  fileInput = document.getElementById("fileInput");
  previewSection = document.getElementById("previewSection");
  previewImage = document.getElementById("previewImage");
  analyzeBtn = document.getElementById("analyzeBtn");
  resetBtn = document.getElementById("resetBtn");
  loading = document.getElementById("loading");
  resultsSection = document.getElementById("resultsSection");
  errorDiv = document.getElementById("error");
  uploadSection = document.getElementById("uploadSection");

  // Elementos de resultados
  animalName = document.getElementById("animalName");
  animalIcon = document.getElementById("animalIcon");
  animalConfidence = document.getElementById("animalConfidence");
  animalType = document.getElementById("animalType");
  animalVenomous = document.getElementById("animalVenomous");
  animalHabitat = document.getElementById("animalHabitat");
  animalDiet = document.getElementById("animalDiet");
  animalDescription = document.getElementById("animalDescription");
  animalImagePlaceholder = document.getElementById("animalImagePlaceholder");

  // Botón para cargar nueva imagen
  const newImageBtn = document.getElementById("newImageBtn");
  if (newImageBtn) {
    newImageBtn.addEventListener("click", () => {
      // Oculta resultados y muestra la sección de carga
      resultsSection.style.display = "none";
      uploadSection.style.display = "flex";
      // Limpia el input de archivo y la vista previa
      fileInput.value = "";
      previewImage.src = "";
      previewImage.style.display = "none";
      document.querySelector(
        ".preview-container .placeholder-image"
      ).style.display = "flex";
      previewSection.style.display = "none";
      errorDiv.style.display = "none";
    });
  }

  // Cargar el modelo
  loadModel();

  // Configurar event listeners
  setupEventListeners();
});

async function loadModel() {
  try {
    model = await mobilenet.load();
    console.log("Modelo cargado exitosamente");
  } catch (err) {
    console.error("Error al cargar el modelo:", err);
    showError(
      "Error al cargar el modelo de reconocimiento. Por favor, recarga la página."
    );
  }
}

function setupEventListeners() {
  uploadBtn.addEventListener("click", () => fileInput.click());
  uploadArea.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", handleFileSelect);

  uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();

    uploadArea.classList.add("drag-over");
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("drag-over");
  });

  uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();

    uploadArea.classList.remove("drag-over");

    if (event.dataTransfer.files.length) {
      fileInput.files = event.dataTransfer.files;
      handleFileSelect(event);
    }
  });

  analyzeBtn.addEventListener("click", analyzeImage);
  resetBtn.addEventListener("click", resetApp);
}

// Manejar selección de archivo
function handleFileSelect(e) {
  const file = e.target.files[0];

  if (!file || !file.type.match("image.*")) {
    showError(
      "Por favor selecciona un archivo de imagen válido (JPEG, PNG, etc.)"
    );
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    previewImage.src = e.target.result;
    previewImage.style.display = "block";
    document.querySelector(
      ".preview-container .placeholder-image"
    ).style.display = "none";
    uploadSection.style.display = "none";
    previewSection.style.display = "flex";
    resultsSection.style.display = "none";
    errorDiv.style.display = "none";
  };

  reader.readAsDataURL(file);
}

// Analizar la imagen
async function analyzeImage() {
  if (!model) {
    showError("El modelo aún no se ha cargado. Por favor espera un momento.");
    return;
  }

  if (!previewImage.src) {
    showError("Por favor selecciona una imagen primero.");
    return;
  }

  // Mostrar carga
  previewSection.style.display = "none";
  loading.style.display = "flex";
  errorDiv.style.display = "none";

  try {
    // Realizar la clasificación
    const predictions = await model.classify(previewImage);

    // Obtener la predicción con mayor probabilidad
    const topPrediction = predictions[0];

    // Simular un retraso para mostrar la animación de carga
    setTimeout(() => {
      displayResults(topPrediction);
    }, 1500);
  } catch (err) {
    console.error("Error al analizar la imagen:", err);
    showError(
      "Error al analizar la imagen. Por favor intenta con otra imagen."
    );
    loading.style.display = "none";
    previewSection.style.display = "flex";
  }
}

// Mostrar resultados
function displayResults(prediction) {
  loading.style.display = "none";

  // Buscar el animal en nuestra base de datos
  const animalKey = prediction.className.toLowerCase();
  let animalData = null;

  // Buscar coincidencia en la base de datos
  for (const key in animalDatabase) {
    if (animalKey.includes(key)) {
      animalData = animalDatabase[key];
      break;
    }
  }

  // Si no encontramos coincidencia, usar datos genéricos
  if (!animalData) {
    animalData = {
      name: prediction.className,
      icon: "❓",
      type: "Desconocido",
      venomous: false,
      habitat: "Desconocido",
      diet: "Desconocido",
      description:
        "No tenemos información detallada sobre este animal en nuestra base de datos.",
      image: "",
    };
  }

  // Actualizar la UI con los datos del animal
  animalName.textContent = animalData.name;
  animalIcon.textContent = animalData.icon;
  animalConfidence.textContent = `${Math.round(
    prediction.probability * 100
  )}% de precisión`;
  animalType.textContent = animalData.type;

  // Actualizar información de veneno
  if (animalData.venomous) {
    animalVenomous.innerHTML = '<span class="venomous">⚠️ Venenoso</span>';
  } else {
    animalVenomous.innerHTML =
      '<span class="not-venomous">✅ No venenoso</span>';
  }

  animalHabitat.textContent = animalData.habitat;
  animalDiet.textContent = animalData.diet;
  animalDescription.textContent = animalData.description;

  // Actualizar imagen representativa
  if (animalData.image) {
    animalImagePlaceholder.innerHTML = `<img src="${animalData.image}" alt="${animalData.name}">`;
  } else {
    animalImagePlaceholder.textContent = "Imagen no disponible";
  }

  // Mostrar resultados
  resultsSection.style.display = "flex";
}

// Mostrar mensaje de error
function showError(message) {
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

// Resetear la aplicación
function resetApp() {
  fileInput.value = "";
  previewImage.src = "";
  previewImage.style.display = "none";
  document.querySelector(
    ".preview-container .placeholder-image"
  ).style.display = "flex";
  previewSection.style.display = "none";
  resultsSection.style.display = "none";
  errorDiv.style.display = "none";
  uploadSection.style.display = "flex";
}
