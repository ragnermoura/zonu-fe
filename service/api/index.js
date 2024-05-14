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


 alteraSenha: async (senha, id_user) => {
    try {
      const response = await http.put(
        `/usuarios/dados/${id_user}`,
        {
          senha: senha
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },


  cadastro: async (
    nome,
    sobrenome,
    email,
    senha,
    razao_social,
    cnpj,
    telefone,
    cep,
    endereco
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          nivel: 2,
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

  listusuarios: async () => {
    try {
      const response = await http.get("/usuarios/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  editStatusUser: async (id_user, status) => {
    try {
      const response = await http.patch(
        "/usuarios/status",
        {
          id_user: id_user,
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deleteUser: async (id_user) => {
    try {
      const response = await http.delete(`/usuarios/delete/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETE",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  cadastrosample: async (nome, sobrenome, email, senha, selectNivel) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro-simples",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          nivel: selectNivel,
          status: 1,
          id_plano: 1,
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

  abritTicket: async (assunto, mensagem, id_user) => {
    try {
      const response = await http.post(
        "/ticket/abrir",
        {
          assunto: assunto,
          mensagem: mensagem,
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

  listMyTickets: async (id_user) => {
    try {
      const response = await http.get(`/ticket/list/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listAllTickets: async () => {
    try {
      const response = await http.get("/ticket", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listMyTickets: async (id_user) => {
    try {
      const response = await http.get(`/ticket/my/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  RespondaTicket: async (id_ticket, resposta) => {
    try {
      const response = await http.patch(
        `/ticket/${id_ticket}`,
        {
          resposta: resposta,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET, PATCH",
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
      const response = await http.get("/caracteristica/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deletecaracteristica: async (id_caracteristica) => {
    try {
      const response = await http.delete(
        `/caracteristica/${id_caracteristica}`,
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

  proximidades: async (nome_proximidade) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  minhasProximidades: async (nome_proximidade, id_user) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  listproximidade: async () => {
    try {
      const response = await http.get("/proximidades/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listminhasproximidades: async (id_user) => {
    try {
      const response = await http.get(`/proximidades/user/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deleteproximidade: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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

  deleteMinhaProximidades: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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

  novoCondominio: async (nome_condominio, id_user) => {
    try {
      const response = await http.post(
        "/condominio/cadastro",
        {
          nome_condominio: nome_condominio,
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

  novoProprietario: async (
    nomeProprietario,
    emailProprietario,
    documentoProprietario,
    telefonePropietario,
    id_user
  ) => {
    try {
      const response = await http.post(
        "/proprietario/cadastro",
        {
          nome: nomeProprietario,
          email: emailProprietario,
          documento: documentoProprietario,
          telefone: telefonePropietario,
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

  listcondominio: async (id_user) => {
    try {
      const response = await http.get(`/condominio/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listproprietario: async (id_user) => {
    try {
      const response = await http.get(`/proprietario/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },


  listBairro: async () => {
    try {
      const response = await http.get("/imovel/bairro", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  novoImovel: async (formData) => {
    try {
      const response = await http.post("/imovel/cadastrar", formData, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  progress: async (id_user) => {
    try {
      const response = await http.get(`/progressao/buscar/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listmyImoveis: async (id_user) => {
    try {
      const response = await http.get(`/imovel/user/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listallImoveis: async () => {
    try {
      const response = await http.get("/imovel", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  comentarioImovel: async (id_imovel) => {
    try {
      const response = await http.patch(
        "/imovel/anotacao",
        {
          anotacao: anotacao,
          id_imovel: id_imovel,
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

  deleteImovel: async (id_imovel) => {
    try {
      const response = await http.delete(`/imovel/delete/${id_imovel}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
        },
      });
  
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
