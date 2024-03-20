export const saveFormDataFromLocalStorage = (formData) => {
    localStorage.setItem('acount_data', JSON.stringify({
        correo_electronico: formData.get('correo_electronico'),
        nombre_empresa: formData.get('nombre_empresa'),
        correo_usuario: formData.get('correo_usuario'),
        codigo_postal: formData.get('codigo_postal'),
        descripcion: formData.get('descripcion'),
        pagina_web: formData.get('pagina_web'),
        direccion: formData.get('direccion'),
        apellidos: formData.get('apellidos'),
        telefonos: formData.get('telefonos'),
        password: formData.get('password'),
        nombres: formData.get('nombres'),
    }))
}