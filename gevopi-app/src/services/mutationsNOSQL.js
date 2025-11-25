import graphqlApi from './apiNOSQL';

export const crearSolicitudAyuda = async ({
  tipo,
  descripcion,
  nivelEmergencia,
  fecha,
  voluntarioId,
  latitud,
  longitud,
}) => {
    const query = `
    mutation {
      crearSolicitudAyuda(
        ciVoluntariosAcudir: 0
        descripcion: "${descripcion.replace(/"/g, '\\"')}"
        fecha: "${fecha}"
        nivelEmergencia: ${nivelEmergencia}
        tipo: "${tipo.replace(/"/g, '\\"')}"
        voluntarioId: "${voluntarioId}"
        latitud: ${latitud}
        longitud: ${longitud}
        estado: "Sin responder"
      ) {
        id
        descripcion
        fecha
        nivelEmergencia
        tipo
        voluntarioId
        latitud
        longitud
        estado
      }
    }
  `;

  try {
    const response = await graphqlApi.post('', { query });

    if (response.data.errors) {
      console.error('GraphQL errors:', response.data.errors);
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.crearSolicitudAyuda;
  } catch (error) {
    console.error('Error en crearSolicitudAyuda:', {
      message: error.message,
      query,
      responseData: error.response?.data
    });
    throw error;
  }
};

export const actualizarSolicitudEnProgreso = async (id, ciArray) => {
    const query = `
      mutation {
        actualizarSolicitudEnProgreso(id: "${id}", nuevosCIs: ${JSON.stringify(ciArray)}) {
          id
          estado
          ciVoluntariosAcudir
        }
      }
    `;
  
    const response = await graphqlApi.post('', { query });
    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }
    return response.data.data.actualizarSolicitudEnProgreso;
  };
  
  
  export const marcarSolicitudRespondida = async (id) => {
    const query = `
      mutation {
        marcarSolicitudRespondida(id: "${id}") {
          id
          estado
          fechaRespondida
        }
      }
    `;
    const response = await graphqlApi.post('', { query });
    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }
    return response.data.data.marcarSolicitudRespondida;
  };

  export const crearHistorialUbicacion = async (lat, lon, voluntarioId) => {
    const query = `
      mutation(
        $voluntarioId: ID!
        $lat: Float!
        $lon: Float!
      ) {
        crearHistorialUbicacion(
          voluntarioId: $voluntarioId
          lat: $lat
          lon: $lon
        ) {
          id
          lat
          lon
          fecha
          voluntarioId
        }
      }
    `;
  
    const variables = {
      voluntarioId: voluntarioId.toString(),
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    };
  
    try {
      const response = await graphqlApi.post('', { query, variables });
      
      // Verificar si hay errores en la respuesta GraphQL
      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }
      
      // Si no hay errores, devolver los datos
      return response.data.data.crearHistorialUbicacion;
    } catch (err) {
      console.error('Error en crearHistorialUbicacion:', {
        error: err.message,
        variables,
        stack: err.stack,
      });
      throw err;
    }
  };