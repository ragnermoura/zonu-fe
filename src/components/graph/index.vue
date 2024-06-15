<template>
    <div class="card flex-fill w-100">
        <div class="card-header">
            <h5 class="card-title mb-0">
                <i class="fa fa-ruler"></i> Média do m2
                <button style="float: inline-end;" type="button" @click="resetFilters" class="btn btn-warning btn-sm">
                    <i class="fa fa-filter"></i> Reiniciar filtros
                </button>
            </h5>
        </div>
        <div class="card-body py-3">
            <div class="chart chart-sm">
                <div class="row">
                    <div class="col-1 mb-3">
                        <label for="tipoNegocio" class="form-label">UF <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedUf" @change="filtrarImoveis">
                            <option value="">Escolha</option>
                            <option v-for="uf in ufs" :key="uf" :value="uf">{{ uf }}</option>
                        </select>
                    </div>
                    <div class="col-1">
                        <label for="cidade" class="form-label">Cidade <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedCidade" @change="filtrarImoveis">
                            <option value="">Escolha</option>
                            <option v-for="cidade in cidades" :key="cidade" :value="cidade">{{ cidade }}</option>
                        </select>
                    </div>
                    <div class="col-1">
                        <label for="bairro" class="form-label">Bairro <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedBairro" @change="filtrarImoveis">
                            <option value="">Selecione</option>
                            <option v-for="bairro in bairros" :key="bairro" :value="bairro">{{ bairro }}</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="tipoNegocio" class="form-label">Tipo de negócio <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedTipoNegocio" @change="filtrarImoveis">
                            <option value="">Escolha</option>
                            <option value="Venda">Venda</option>
                            <option value="Aluguel">Aluguel</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="status" class="form-label">Status <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedStatus" @change="filtrarImoveis">
                            <option value="">Escolha</option>
                            <option value="Sim">Publicado</option>
                            <option value="Não">Não publicado</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="tipoImovel" class="form-label">Tipo do imóvel <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedTipoImovel" @change="filtrarImoveis">
                            <option value="">Selecione</option>
                            <option value="Casa">Casa</option>
                            <option value="Apartamento">Apartamento</option>
                            <option value="Flat">Flat</option>
                            <option value="Terreno">Terreno</option>
                            <option value="Sítio">Sítio</option>
                            <option value="Haras">Haras</option>
                            <option value="Kitnet">Kitnet</option>
                            <option value="Fazenda">Fazenda</option>
                            <option value="Galpão">Galpão</option>
                            <option value="Sala Comercial">Sala Comercial</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="proximoMar" class="form-label">Proximo do Mar? <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedProximoMar" @change="filtrarImoveis">
                            <option value="">Selecione</option>
                            <option value="Vista para o mar">Vista para o mar</option>
                            <option value="Frente para o mar">Frente para o mar</option>
                            <option value="Quadra do mar">Quadra do mar</option>
                            <option value="Proximo ao mar">Proximo ao mar</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                    <div class="col-1">
                        <label for="quartos" class="form-label">Quartos <small><i
                                    class="fa fa-filter"></i></small></label>
                        <input style="height: 34px;" type="number" class="form-control" v-model="selectedQuartos"
                            @input="filtrarImoveis" placeholder="00">
                    </div>

                    <canvas id="myMetroQuadrado" v-if="filteredImoveis.length"></canvas>
                    <div v-if="!filteredImoveis.length">
                        <div class="alert alert-primary mt-3" role="alert">
                            😔 Desculpe, não achamos nenhum imóvel com essas características.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../../service/api/index";
import 'https://cdn.jsdelivr.net/npm/chart.js'

export default {
    name: 'CompGraph',
    data() {
        return {
            allImoveis: [],
            filteredImoveis: [],
            ufs: [],
            cidades: [],
            bairros: [],
            selectedUf: '',
            selectedCidade: '',
            selectedBairro: '',
            selectedTipoNegocio: '',
            selectedStatus: '',
            selectedTipoImovel: '',
            selectedProximoMar: '',
            selectedQuartos: '',
            chart: null
        };
    },
    mounted() {
        this.fetchAllImoveis();
    },
    created() {
        this.fetchAllImoveis();
    },
    methods: {
        async fetchAllImoveis() {
            try {
                const res = await api.listallImoveis();
                this.allImoveis = res.data;
                this.ufs = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.estado))];
                this.cidades = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.cidade))];
                this.bairros = [...new Set(this.allImoveis.map(imovel => imovel.localizacao.bairro))];
                this.filteredImoveis = this.allImoveis; // Inicializar os imóveis filtrados com todos os imóveis
                this.atualizarOpcoesFiltro(); // Atualizar as opções de filtro
                this.atualizarGraficoPorUF(); // Atualizar o gráfico para mostrar a média inicial por UF
            } catch (error) {
                console.error('Erro ao buscar imóveis: ', error);
            }
        },
        atualizarOpcoesFiltro() {
            if (this.selectedUf) {
                const imoveisFiltradosPorUf = this.allImoveis.filter(imovel => imovel.localizacao.estado === this.selectedUf);
                this.cidades = [...new Set(imoveisFiltradosPorUf.map(imovel => imovel.localizacao.cidade))];
                if (this.selectedCidade) {
                    const imoveisFiltradosPorCidade = imoveisFiltradosPorUf.filter(imovel => imovel.localizacao.cidade === this.selectedCidade);
                    this.bairros = [...new Set(imoveisFiltradosPorCidade.map(imovel => imovel.localizacao.bairro))];
                } else {
                    this.bairros = [...new Set(imoveisFiltradosPorUf.map(imovel => imovel.localizacao.bairro))];
                }
            } else {
                this.cidades = [];
                this.bairros = [];
            }
        },
        filtrarImoveis() {
            console.log("Filtrando imóveis");
            this.filteredImoveis = this.allImoveis.filter(imovel => {
                return (
                    (!this.selectedUf || imovel.localizacao.estado === this.selectedUf) &&
                    (!this.selectedCidade || imovel.localizacao.cidade === this.selectedCidade) &&
                    (!this.selectedBairro || imovel.localizacao.bairro === this.selectedBairro) &&
                    (!this.selectedTipoNegocio || imovel.preco.tipo_negocio === this.selectedTipoNegocio) &&
                    (!this.selectedStatus || imovel.publicacao.mostrar_imovel_publi === this.selectedStatus) &&
                    (!this.selectedTipoImovel || imovel.info.tipo === this.selectedTipoImovel) &&
                    (!this.selectedProximoMar || imovel.info.proximo_mar === this.selectedProximoMar) &&
                    (!this.selectedQuartos || imovel.comodos.dormitorio == this.selectedQuartos)
                );
            });

            console.log("Imóveis filtrados:", this.filteredImoveis);
            this.atualizarOpcoesFiltro();
            this.atualizarGrafico(); // Atualizar o gráfico com base nos filtros aplicados
        },
        calcularMedia(imoveis) {
            const totalArea = imoveis.reduce((sum, imovel) => sum + parseFloat(imovel.medidas.area_total || 0), 0);
            const totalValor = imoveis.reduce((sum, imovel) => sum + parseFloat(imovel.medidas.media_metro_quadrado || 0) * parseFloat(imovel.medidas.area_total || 0), 0);
            return totalArea ? (totalValor / totalArea) : 0;
        },
        formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        atualizarGrafico() {
            console.log("Atualizando gráfico");
            const canvas = document.getElementById('myMetroQuadrado');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    if (this.chart) {
                        this.chart.destroy();
                    }

                    let medias;
                    if (this.selectedUf && this.selectedCidade) {
                        medias = this.bairros.map(bairro => {
                            const imoveisPorBairro = this.filteredImoveis.filter(imovel => imovel.localizacao.bairro === bairro);
                            return {
                                label: bairro,
                                media: this.calcularMedia(imoveisPorBairro)
                            };
                        });
                    } else if (this.selectedUf) {
                        medias = this.cidades.map(cidade => {
                            const imoveisPorCidade = this.filteredImoveis.filter(imovel => imovel.localizacao.cidade === cidade);
                            return {
                                label: cidade,
                                media: this.calcularMedia(imoveisPorCidade)
                            };
                        });
                    } else {
                        medias = this.ufs.map(uf => {
                            const imoveisPorUf = this.filteredImoveis.filter(imovel => imovel.localizacao.estado === uf);
                            return {
                                label: uf,
                                media: this.calcularMedia(imoveisPorUf)
                            };
                        });
                    }

                    const labels = medias.map(item => item.label);
                    const data = medias.map(item => item.media);

                    console.log("Médias:", medias);

                    this.chart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Média do m² (R$)',
                                data: data,
                                borderWidth: 1,
                                backgroundColor: "rgba(81, 229, 255, 0.2)",
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        callback: (value) => this.formatarMoeda(value)
                                    }
                                }
                            },
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: (context) => `Média: ${this.formatarMoeda(context.raw)}`
                                    }
                                }
                            }
                        }
                    });
                }
            }
        },
        atualizarGraficoPorCidade() {
            console.log("Atualizando gráfico por Cidade");
            const canvas = document.getElementById('myMetroQuadrado');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    if (this.chart) {
                        this.chart.destroy();
                    }

                    const mediasPorCidade = this.cidades.map(cidade => {
                        const imoveisPorCidade = this.filteredImoveis.filter(imovel => imovel.localizacao.cidade === cidade);
                        return {
                            cidade,
                            media: this.calcularMedia(imoveisPorCidade)
                        };
                    });

                    const labels = mediasPorCidade.map(item => item.cidade);
                    const data = mediasPorCidade.map(item => item.media);

                    console.log("Médias por Cidade:", mediasPorCidade);

                    this.chart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Média do m² (R$)',
                                data: data,
                                borderWidth: 1,
                                backgroundColor: "rgba(81, 229, 255, 0.2)",
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        callback: (value) => this.formatarMoeda(value)
                                    }
                                }
                            },
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: (context) => `Média: ${this.formatarMoeda(context.raw)}`
                                    }
                                }
                            }
                        }
                    });
                }
            }
        },

        atualizarGraficoPorUF() {
            console.log("Atualizando gráfico por UF");
            const canvas = document.getElementById('myMetroQuadrado');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    if (this.chart) {
                        this.chart.destroy();
                    }

                    const mediasPorUF = this.ufs.map(uf => {
                        const imoveisPorUF = this.filteredImoveis.filter(imovel => imovel.localizacao.estado === uf);
                        return {
                            uf,
                            media: this.calcularMedia(imoveisPorUF)
                        };
                    });

                    const labels = mediasPorUF.map(item => item.uf);
                    const data = mediasPorUF.map(item => item.media);

                    console.log("Médias por UF:", mediasPorUF);

                    this.chart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Média do m² (R$)',
                                data: data,
                                borderWidth: 1,
                                backgroundColor: "rgba(81, 229, 255, 0.2)",
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        callback: (value) => this.formatarMoeda(value)
                                    }
                                }
                            },
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: (context) => `Média: ${this.formatarMoeda(context.raw)}`
                                    }
                                }
                            }
                        }
                    });
                }
            }
        },
        resetFilters() {
            console.log("Resetando filtros");
            this.selectedUf = '';
            this.selectedCidade = '';
            this.selectedBairro = '';
            this.selectedTipoNegocio = '';
            this.selectedStatus = '';
            this.selectedTipoImovel = '';
            this.selectedProximoMar = '';
            this.selectedQuartos = '';
            this.filteredImoveis = this.allImoveis; // Resetar para todos os imóveis
            this.atualizarOpcoesFiltro();
            this.atualizarGrafico(); // Atualizar o gráfico para mostrar a média inicial por UF
        }
    },
    watch: {
        selectedUf(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.selectedCidade = "";
                this.selectedBairro = "";
                this.atualizarOpcoesFiltro();
            }
        },
        selectedCidade(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.selectedBairro = "";
                this.atualizarOpcoesFiltro();
            }
        }
    },


};
</script>
