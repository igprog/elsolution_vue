import axios from 'axios';
export const mixin = {
    data() {
        return {
            appname: 'Plan Ishrane - Aplikacija',
            apiurl: '',
            loading: false
        };
    },
    created() {
        // console.log('Mixin...')
    },
    methods: {
        testMixin() {
            alert('mixin ok');
        },
        gethttp(path) {
            return this.$http.get(path).then(res => {
                return res.body;
                //return JSON.parse(res.body);
            })
            // return this.$http.get(this.frontend + path).then(res => {
            //     debugger;
            //     return JSON.parse(res.body.d);
            // })
        },
        postasmx(service, method, data) {
            this.loading = true;
            return this.$http.post(this.$backend + service + '.asmx/' + method, data).then(res => {
                debugger;
                this.loading = false;
                return JSON.parse(res.body.d);
            });
        },
        post(service, params) {
            this.loading = true;
            const api = `https://localhost:5001/api/${service}`;
            // const api = 'https://localhost:5001/api/mail/send';
            console.log('api', api);
            console.log('params', params);
            debugger;
            return;
            return axios.post(api, params).then((response) => {
                console.log('post (mixin)', response.data);
                this.loading = false;
            });
        },
        get(service) {
            this.loading = true;
            const api = `https://localhost:5001/api/${service}`;
            console.log('api', api);
            debugger;
            axios.get(api).then((response) => {
                console.log('get (mixin)', response.data);
                this.loading = false;
                return response.data;
            });
        },
        isNullOrWhiteSpace(str) {
            return !str || !str.trim();
        }
    }
}