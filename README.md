# Mejora de la experiencia de la vitrina de productos con microinteracciones

El objetivo de este reto es mejorar la experiencia del usuario en la vitrina de productos de una tienda eCommerce, utilizando animaciones y transiciones para crear microinteracciones que realcen la navegación y la interacción del usuario. La vitrina de productos recibe un flujo constante de 1 500 visitas por hora, con picos de 3 000 visitas en horas de promoción. Los productos se clasifican en categorías y subcategorías, y cada producto tiene atributos como nombre, precio, stock y valoración. La vitrina debe mantener una latencia de respuesta inferior a 200ms y una disponibilidad del 99.9%.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Microinteracciones y transiciones en storefront |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 1 semana |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Identificación de puntos de mejora

**Objetivo:** Identificar las áreas de la vitrina de productos que pueden beneficiarse de microinteracciones para mejorar la experiencia del usuario.

**Tiempo estimado:** 1 día

**Instrucciones:**

- Analiza la vitrina de productos existente e identifica al menos tres puntos donde se pueden introducir microinteracciones.
- Describe brevemente cómo las microinteracciones propuestas mejorarían la experiencia del usuario.

**Entregable:** Documento con la identificación de puntos de mejora y propuesta de microinteracciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la jerarquía de categorías y subcategorías al identificar puntos de mejora.
- Piensa en cómo las microinteracciones pueden guiar al usuario a través de la vitrina.

</details>

### Fase 2: Diseño de microinteracciones

**Objetivo:** Diseñar las microinteracciones identificadas en la fase anterior, definiendo las animaciones y transiciones específicas.

**Tiempo estimado:** 3 días

**Instrucciones:**

- Para cada punto de mejora identificado, diseña una microinteracción que incluya animación y transición.
- Describe los detalles de la animación (duración, tipo de animación) y la transición (efecto, duración).

**Entregable:** Documento con el diseño detallado de las microinteracciones, incluyendo animaciones y transiciones.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza principios de diseño de UX para asegurar que las microinteracciones sean intuitivas y mejoren la experiencia del usuario.
- Considera la consistencia en el estilo de las animaciones y transiciones.

</details>

### Fase 3: Implementación y validación

**Objetivo:** Implementar las microinteracciones diseñadas y validar que mejoran la experiencia del usuario.

**Tiempo estimado:** 3 días

**Instrucciones:**

- Implementa las microinteracciones en la vitrina de productos.
- Realiza pruebas de usuario para validar que las microinteracciones mejoran la experiencia y no introducen nuevos problemas.

**Entregable:** Vitrina de productos con las microinteracciones implementadas y reporte de pruebas de usuario.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de prototipado para crear mockups de las microinteracciones antes de implementarlas.
- Recopila feedback de usuarios reales para asegurar que las microinteracciones cumplen con las expectativas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las microinteracciones y cómo se diferencian de otras animaciones en la vitrina de productos?
- **paraQueSirve**: ¿Cómo pueden las microinteracciones mejorar la experiencia del usuario en la vitrina de productos?
- **comoSeUsa**: ¿Cómo se diseñan y se implementan las microinteracciones en la vitrina de productos?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar microinteracciones y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la implementación de microinteracciones en la vitrina de productos?

## Criterios de Evaluacion

- Identificación de puntos de mejora en la vitrina de productos.
- Diseño de microinteracciones que mejoren la experiencia del usuario.
- Implementación efectiva de las microinteracciones.
- Validación de la mejora en la experiencia del usuario a través de pruebas.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npx tsc --noEmit
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
