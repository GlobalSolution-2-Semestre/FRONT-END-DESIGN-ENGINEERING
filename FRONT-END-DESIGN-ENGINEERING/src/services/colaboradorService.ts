import { get, post, put, del } from "./api";

export const listarColaboradores = () => get("/colaborador");

export const buscarColaboradorPorId = (id: number) => get(`/colaborador/${id}`);

export const criarColaborador = (data: unknown) => post("/colaborador", data);

export const atualizarColaborador = (data: unknown) => put("/colaborador", data);

export const deletarColaborador = (id: number) => del(`/colaborador/${id}`);
