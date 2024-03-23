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

    cadastro: async (nome, sobrenome, email, senha, razao_social, cnpj, telefone, cep, endereco) => {
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
                    id_plano: 1,
                    razao_social: razao_social,
                    cnpj: cnpj,
                    telefone: telefone,
                    cep: cep,
                    endereco: endereco,
                    
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

    sendNewAccount: async (email, nome) => {
        try {
            const response = await http.post(
                "/email/boas-vindas",
                {
                    email: email,
                    nome: nome,
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

    caracteristica: async (nome_caracteristica, id_user) => {
        try {
            const response = await http.post(
                "/caracteristica/cadastro",
                {
                    nome_caracteristica: nome_caracteristica,
                    id_user: id_user,
                 
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

    listcaracteristica: async () => {
        try {
            const response = await http.get(
                "/caracteristica/",
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

    deletecaracteristica: async (id_caracteristica) => {
        try {
            const response = await http.delete(
                `/caracteristica/cadastro${id_caracteristica}`,
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
