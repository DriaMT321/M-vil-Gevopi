import api from './api';
import { getToken } from './authService';

export const getVoluntarios = async () => {
    const token = getToken();
    const response = await api.get('/voluntario/voluntarios', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data || response.data; // Retorna el array de data
  };
  
  export const getVoluntarioByCi = async (ci) => {
    const token = getToken();
    const response = await api.get(`/usuarios/ci/${ci}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

export const getVoluntarioByUsuarioId = async (id) => {
    const token = getToken();
    const response = await api.get(`/voluntario/voluntarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };