const BASE_URL = "https://java-8ekc.onrender.com";

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({})); 
    throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

/**
 * 
 * @param endpoint 
 */
export const get = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return handleResponse(response);
};

/**
 * Função genérica para requisições POST.
 * @param endpoint 
 * @param body 
 */
export const post = async (endpoint: string, body: unknown) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

/**
 * .
 * @param endpoint 
 * @param body 
 */
export const put = async (endpoint: string, body: unknown) => {
   const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

/**
 * 
 * @param endpoint 
 */
export const del = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
