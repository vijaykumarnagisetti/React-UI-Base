class Auth {
    constructor(){
        this.authenticated = false;
        console.log('AUTHENTICATE CONSTRUCTOR ',this.authenticated)

    }

    login(cb){
        this.authenticated = true;
        cb();
    }

    logout(cb){
        this.authenticated = false;
        cb();
    }
      
    isAuthenticated(){
        console.log("AUTHENTICTAED", this.authenticated);
        return this.authenticated;
    }
}
 
export default new Auth();