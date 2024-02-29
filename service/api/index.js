import { http } from "../config";


export default {
    login: async (email, senha) => {
        try {
            const response = await http.post(
                "/login",
                {
                    email: email,
                    senha: senha,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },
    recovery: async (newsenha, id_user) => {
        try {
            const response = await http.patch(
                "/login",
                {
                    id_user: id_user,
                    senha: newsenha,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    cadastro: async (nome, sobrenome, email, senha) => {
        try {
            const response = await http.post(
                "/usuarios/cadastro",
                {
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    senha: senha,
                    avatar: '',
                    nivel: 1,
                    status: 1,
                    id_plano: 1
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },



}
