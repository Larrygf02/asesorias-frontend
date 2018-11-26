
/** QUERY DE EJEMPLO QUE SE EJECUTARA  */
export const task_query = {
    REGISTRO_DATOS: 'insert into db_recursoshumanos.postulante(tipo_nro_doc, nro_doc,nombres,correo, ffvv,fuente_reclutamiento) values(?,?,?,?,?,?);',
    REGISTRO_USUARIO: 'insert into db_asesorias.usuario (nombre, apellido, correo, password) VALUES (?, ?, ?, ?)'
 }