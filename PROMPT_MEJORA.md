# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npx tsc --noEmit
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced

### Brecha de conocimiento
Aplica conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones y alineadas con la UX definida en el proyecto

### Misión / candidato
Mejorar la experiencia de la vitrina de productos

### Datos adicionales
Candidato con experiencia avanzada en eCommerce

### Reto
- Tema: Microinteracciones y transiciones en storefront
- Seniority: advanced-l2
- Tipo: practical
- Título: Mejora de la experiencia de la vitrina de productos con microinteracciones
- Tiempo estimado: 1 semana

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Identificación de puntos de mejora — objetivo: Identificar las áreas de la vitrina de productos que pueden beneficiarse de microinteracciones para mejorar la experiencia del usuario. — entregable (NO resolver): Documento con la identificación de puntos de mejora y propuesta de microinteracciones.
- Fase 2: Diseño de microinteracciones — objetivo: Diseñar las microinteracciones identificadas en la fase anterior, definiendo las animaciones y transiciones específicas. — entregable (NO resolver): Documento con el diseño detallado de las microinteracciones, incluyendo animaciones y transiciones.
- Fase 3: Implementación y validación — objetivo: Implementar las microinteracciones diseñadas y validar que mejoran la experiencia del usuario. — entregable (NO resolver): Vitrina de productos con las microinteracciones implementadas y reporte de pruebas de usuario.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "@vtex/*": ["node_modules/@vtex/*"],
      "react": ["node_modules/react"],
      "react-dom": ["node_modules/react-dom"]
    },
    "lib": ["dom", "dom.iterable", "esnext"],
    "types": ["vite/client", "vtex/types"],
    "noEmit": true
  },
  "include": [
    "react/**/*",
    "store/**/*",
    "styles/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.test.ts",
    "**/*.test.tsx"
  ]
}

// === ARCHIVO: manifest.json ===
{
  "vendor": "vtex",
  "name": "storefront-microinteractions",
  "version": "0.1.0",
  "builders": {
    "react": "3.x",
    "store": "4.x",
    "styles": "2.x"
  },
  "dependencies": {
    "vtex.store-components": "3.15.0",
    "vtex.styleguide": "9.15.0"
  },
  "peerDependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "settings": {
    "title": "Storefront Microinteractions",
    "description": "Improves product showcase with microinteractions and smooth transitions.",
    "store.name": "Storefront Microinteractions",
    "store.supportedLocales": ["en-US", "es-ES"],
    "store.theme": "vtex.store-theme@^0.1.0",
    "store.assets": {
      "styles": {
        "main": "styles/configs/vitrina.css"
      }
    },
    "store.blocks": {
      "product-summary": {
        "component": "ProductCard",
        "composition": "children",
        "allowed": ["product-summary-image", "product-summary-name", "product-summary-price"]
      }
    }
  },
  "policies": [
    {
      "name": "vtex.styleguide#product-summary",
      "version": "^9.15.0",
      "builders": ["react"]
    },
    {
      "name": "vtex.store-components#product-summary",
      "version": "^3.15.0",
      "builders": ["react"]
    }
  ],
  "scripts": {
    "lint": "eslint --ext .ts,.tsx react/ store/ styles/",
    "type-check": "tsc --noEmit",
    "build": "vtex build"
  },
  "vtex": {
    "title": "Storefront Microinteractions",
    "description": "Enhances product showcase with animations and transitions for better UX.",
    "vendor": "vtex",
    "memory": "256Mi",
    "timeout": 2
  }
}

// === ARCHIVO: store/interfaces.json ===
{
  "ProductCard": {
    "properties": {
      "name": "string",
      "price": "number",
      "stock": "number",
      "rating": "number"
    }
  },
  "ProductGrid": {
    "properties": {
      "products": "ProductCard[]"
    }
  }
}

// === ARCHIVO: store/blocks/vitrina-productos.jsonc ===
{
  "$schema": "https://unpkg.com/@vtex/api@1.x/docs/schemas/block.json",
  "name": "vitrina-productos",
  "version": "1.0.0",
  "components": [
    {
      "id": "product-card",
      "component": "ProductCard",
      "props": {
        "name": "{{name}}",
        "price": "{{price}}",
        "stock": "{{stock}}",
        "rating": "{{rating}}"
      }
    },
    {
      "id": "product-grid",
      "component": "ProductGrid",
      "props": {
        "products": "{{products}}"
      }
    }
  ],
  "animations": [
    {
      "id": "hover-effect",
      "selector": ".product-card:hover",
      "animation": {
        "transform": "scale(1.05)"
      }
    },
    {
      "id": "transition-effect",
      "selector": ".product-grid",
      "animation": {
        "transition": "transform 0.3s ease-in-out"
      }
    }
  ]
}


// === ARCHIVO: react/components/ProductCard.tsx ===
import React, { useState } from 'react';
import { CSSHandles, useCssHandles } from 'vtex.styleguide';
import { Product } from '@vtex/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cssHandles = useCssHandles(['productCard', 'hoverEffect']);

  return (
    <div
      className={`${cssHandles.productCard} ${isHovered? cssHandles.hoverEffect : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;

// === ARCHIVO: react/components/ProductGrid.tsx ===
import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@vtex/api';
import { useProductAnimation } from '../hooks/useProductAnimation';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { startAnimation, stopAnimation } = useProductAnimation();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    startAnimation(products, setDisplayedProducts);
    return () => stopAnimation();
  }, [products]);

  return (
    <div className="product-grid">
      {displayedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

// === ARCHIVO: react/hooks/useProductAnimation.ts ===
import { useEffect, useState } from 'react';
import { Product } from '@vtex/api';

interface AnimationProps {
  products: Product[];
  setDisplayedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const useProductAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = (products: Product[], setDisplayedProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDisplayedProducts(products);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  return { startAnimation, stopAnimation };
};

export default useProductAnimation;

// === ARCHIVO: styles/configs/vitrina.css ===
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #f8f9fa;
  --text-color: #212529;
  --font-family: 'Helvetica Neue', Arial, sans-serif;
  --transition-duration: 0.3s;
}

.product-card {
  background-color: var(--background-color);
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-duration) ease-in-out, box-shadow var(--transition-duration) ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: opacity var(--transition-duration) ease-in-out;
}

.product-card img:hover {
  opacity: 0.8;
}

.product-card.product-info {
  padding: 16px;
  text-align: center;
}

.product-card.product-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 8px;
}

.product-card.product-price {
  font-size: 1rem;
  color: var(--primary-color);
}


// === ARCHIVO: styles/css-handles/ProductCard.css ===
.product-card-handles {
  --product-card-background: var(--background-color);
  --product-card-border: var(--secondary-color);
  --product-card-border-radius: 8px;
  --product-card-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --product-card-transition-duration: 0.3s;
}

.product-card-handles.product-card {
  background-color: var(--product-card-background);
  border: 1px solid var(--product-card-border);
  border-radius: var(--product-card-border-radius);
  box-shadow: var(--product-card-box-shadow);
  transition: transform var(--product-card-transition-duration) ease-in-out, box-shadow var(--product-card-transition-duration) ease-in-out;
}

.product-card-handles.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-card-handles.product-card img {
  transition: opacity var(--product-card-transition-duration) ease-in-out;
}

.product-card-handles.product-card img:hover {
  opacity: 0.8;
}


// === ARCHIVO: README.md ===
# Proyecto de Mejora de Vitrina de Productos

## Descripción
Este proyecto tiene como objetivo mejorar la experiencia del usuario en la vitrina de productos de una tienda eCommerce, utilizando animaciones y transiciones para crear microinteracciones que realcen la navegación y la interacción del usuario.

## Setup
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-vitrina.git
   cd proyecto-vitrina
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

## Comandos
- `npm run build`: Construye el proyecto para producción.
- `npm run lint`: Ejecuta el linter para verificar el código.
- `npm run test`: Ejecuta los tests unitarios.

## Estructura de Carpetas
- `react/`: Componentes de React.
- `store/`: Configuración de la tienda.
- `styles/`: Estilos globales y configuraciones de CSS Handles.

## Contribuyendo
Si deseas contribuir al proyecto, por favor sigue las siguientes guías:
1. Crea una rama para tu feature o bugfix.
2. Asegúrate de que los tests pasan.
3. Ejecuta el linter antes de hacer un pull request.
4. Documenta tu código y sigue las convenciones del proyecto.

Gracias por tu colaboración!
```
