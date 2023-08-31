import { ref, type Ref } from 'vue';
export default class AuthService{
    
    private _jwt: Ref<string>;
    private _error: Ref<string>;
    constructor(){
        this._jwt = ref('')      //infiere
        this._error = ref('')
    }

    get jwt(): Ref<string>{
        return this._jwt;
    }
    get error(): Ref<string>{
        return this._error;
    }

    async login(username: string, password: string): Promise<boolean>{
        const url = 'http://127.0.0.1:8000/api/auth/login'
        try {

            let response = await fetch(url,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' // Specify content type
                  },
                body:JSON.stringify({
                    username,
                    password
                })
            })

            if (!response.ok) {
                this.error.value = 'Login Failed';
                return false;
            }

            const responseData = await response.json();

            if('erros' in responseData){
                this.error.value = "Login Failed";
                return false
            }

            this.jwt.value = responseData?.data?.access_token; 
            return true

        } catch (error) {
            console.log(error);  
            this.error.value = "Login Failed(Server)";          
            return false

        }
    }
}