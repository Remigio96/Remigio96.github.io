# 🕌 Instructivo para colaborar en el proyecto `Remigio96.github.io`

¡Hola equipo! 👋
Aquí les dejo las instrucciones paso a paso para poder colaborar correctamente en el proyecto:

---

## ✅ Pasos que deben seguir:

### 1. **Fork del proyecto**
- Entrar a este repositorio: [https://github.com/Remigio96/Remigio96.github.io](https://github.com/Remigio96/Remigio96.github.io)
- Hacer clic en el botón **"Fork"** (arriba a la derecha).
- Esto creará una **copia del proyecto en sus propias cuentas de GitHub**.

### 2. **Clonar su fork a sus computadoras**

```bash
git clone https://github.com/TU-USUARIO/Remigio96.github.io.git
```
(Reemplazar `TU-USUARIO` por tu usuario real de GitHub).

### 3. **Entrar a la carpeta clonada**

```bash
cd Remigio96.github.io
```

### 4. **Crear una nueva rama para trabajar** (recomendable)

```bash
git checkout -b nombre-de-tu-rama
```
Ejemplo:
```bash
git checkout -b mejora-seccion-educacion
```

### 5. **Hacer cambios en el proyecto**
- Editar el código HTML, CSS, imágenes, etc.
- Guardar los cambios.

### 6. **Agregar y hacer commit de los cambios**

```bash
git add .
git commit -m "Descripción breve del cambio"
```
Ejemplo:
```bash
git commit -m "Agregada sección de experiencia laboral"
```

### 7. **Subir (push) la rama a su fork en GitHub**

```bash
git push origin nombre-de-tu-rama
```
Ejemplo:
```bash
git push origin mejora-seccion-educacion
```

### 8. **Crear un Pull Request (PR)**
- Ir a tu repositorio en GitHub (el fork).
- Aparecerá un botón que dice **"Compare & pull request"**. Haz clic allí.
- **IMPORTANTE:**
  - Asegúrate que el Pull Request **apunte a la rama `develop` del repositorio original** (no a `main`).
  - Si aparece `base: main`, cambiarlo a `base: develop`.
- Escribir un pequeño comentario explicando qué cambios hicieron.
- Enviar el Pull Request.

---

# 📉 Resumen visual de pasos:

```text
Fork ➔ Clone ➔ Nueva Rama ➔ Cambios ➔ Commit ➔ Push ➔ Pull Request hacia develop
```

---

# 📍 Cosas importantes que deben recordar:

- **NO** deben hacer Pull Request directo a `main`.
- **SIEMPRE** deben hacer su PR contra `develop`.
- Hacer **fork, commit y pull request** es parte del desafío.

---

# 🌟 Extra: ¿Qué pasa si crean un PR hacia `main`?

- **Sí pueden** crear el Pull Request.
- **No les saldrá error**.
- **No se podrá hacer el Merge directo** si no cumple con las reglas de protección.
- **Yo puedo cambiar el destino del PR** a `develop` si fuera necesario.
