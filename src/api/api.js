export const Api = {
    baseUrl: 'https://desenvolvimento-integrado-de-backend-gtnt.onrender.com/',

    inventario: {
        endpoint: function() {
            return Api.baseUrl + 'inventario'
        },
        readAll: function() {
            return this.endpoint() + '/'
        }
    },

    buildApiGetRequest: function (url) {
        return fetch(url, { method: 'GET' }).catch(function (error) {
            console.error('Erro ao carregar dados: ' + url, error)
            toast.error('Erro ao carregar dados.')
          })
    }
}
