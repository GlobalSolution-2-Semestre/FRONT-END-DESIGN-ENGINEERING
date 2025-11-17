const BASE_URL = "https://java-8ekc.onrender.com";

const handleResponse = async <T>(response: Response): Promise<T> => {
  
  if ((response.status === 201 || response.status === 200) && response.headers.get('Content-Length') === '0') {
    return null as T; 
  }


  const data = await response.json(); 

  if (!response.ok) {
   
    const errorMessage = (data as { message?: string }).message || `Erro ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  
  return data as T;
};

export const get = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return handleResponse<T>(response);
};

export const post = async <T>(endpoint: string, body: unknown): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
};

export const put = async <T>(endpoint: string, body: unknown): Promise<T> => {
   const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
};


export const del = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE',
  });
  return handleResponse<T>(response);
};