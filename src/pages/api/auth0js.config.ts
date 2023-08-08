import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
  domain: "https://dev-vmeikuit6g80vtd0.us.auth0.com",
  clientID: "CV4hftoIzJMTnphsbExyzljx0tH5g3rQ",
  redirectUri: 'http://localhost:3000/api/auth/callback', 
  responseType: 'token id_token',
});

export default auth;