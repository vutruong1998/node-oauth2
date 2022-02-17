const jose = require("node-jose");

jose.JWK.createKey('RSA', 2048, { alg: 'RS256', use: 'sig' }).
    then(function(result) {
        console.log(result.toPEM(true))
    });

// const jwkToPem = require("jwk-to-pem")
// const fs = require('fs')

// const jwk =  {
//     "kty": "RSA",
//     "kid": "gdSZOeGG_YXQ1jKH-HwB_yCqbXXp09iamRAIw75Jdd8",
//     "use": "sig",
//     "alg": "RS256",
//     "e": "AQAB",
//     "n": "uN1HJQiWe0i5yguTl0TuBavV4K-nCt40EUfZve1WCxa1XKmugSkEyUnPVhYk5ARKF7Fvm1gqrxjMaGswrV8mpdWRa2IcQ2WWyIyQe-ElDmF2Ll8P7xLJ-_t9RlisDJv6wuKZsRvswHto06Fw0g3y0hF3B62E1IqkU5v0WFDwgrAa6Gvm0jcekcDgLqOhlQNtfpDyqjVQN02iXnqYCZXNP31vQT1QoQEk_WzaEVtBC6TC9sJs4HyNTtRtulYdHRHB_kzGjgnpgsPu7b_r8iQ-XqC1HoRZwA5eaqpTVLsfIfab60UUR0d2cC-NbiTwWQIzwuTtGXtw8ZeUji4mpVChwQ",
//     "d": "gDTeIV3qVwfh6bDLo-4nEQHSK6hGNfBSteVZqjGOKdSO5Pu8zVCwRBUPWQm0ffpHlFT3LQohWBvfr08fjC1gNUR_PLTnGwq6Xs21amSDeYy4FILTHx-tuzb387CNaZVHfJ8ArebK89bipVriTptj2rJIFagOZgTc4CtZc2J22nquMCi99dMebinCmXuDZYIPXoJ77umZAxGO0KPVPQ5gto5J0EbEIVt6udkek9vxNyKQGZ1d76wnrcL76z2My3Zn1E0rfBGoJJjH1EFThLNgDYvl8LLv8CoP3VcA59tBFtd20R8dtaDdXkQE-C5kJn82QfImJ4gqvzcTMmGwaCedHQ",
//     "p": "8rkaBxK3_MJda8IMBG5tzS3967BqxKj0zb3zhT125XsPMnqEMJEM48rYfCW3voh_g-9vwbc4BT8YYKeiyKwG2Gnt8dyl1AFMKRGOE3-8fQfmhuSnfyiA6kA15j6GDHB4odI184bwLPPG1OOdQAaFKH9ZYnr-Zv76j3xkkcDNH6M",
//     "q": "wvn4QW8SEGd_QJCgwYlBsTs73N2KoO7bCr4PfHT3bcqkp-yzDRpTXROIz_Xoy0WOVy9lJUFfwEeA1VmdrESkFzFV02VolrlGRcoejM8IBxXxd0ItSBG0CSt1RnXUDfeYkGEcEQyuCEL3nsKk3OjD-YVRg_mAT0rKSoDtZ7XH_0s",
//     "dp": "AgiE7Ew-2FI0gCOXAC6AovhgqSnIKy-TJWoS8SnLpi56uRyHoPSGHB5l49xZBrKUBuHpmMDVKk4WATFGTtIKGKQCh0Um6ni8T5fDDezDAnUffD_MG2eWdN_m06_wZYhHqmtdYlXeCzJblwr1FUU4tlciw41uNiSqqqsLGKF51ms",
//     "dq": "PCEAyZUqWfrBCLVRjj35D2I4FOYRoY3n6Ukx12zu_WH4I31gvpK20MZ8c73fnAiIXCTWqYWetNqYRbOMZ5sHi8uAL2Bfv9PFczJg94XFcQH4ZJH5CvfCsO1BDoi569DGsQfxsuRZK10TpldapnH2NhZCTFP-mPV0q0NVc51g3z8",
//     "qi": "c3ddQL6DIiuK5y8md4w_2a17RwEsJCLUv2oU4ICdZKhX7WRUcwqlUBNgzTDBB0sl1FWKzfeG_bsl4wG56ntD11uqq4WwKWFTRp_vJtOp6xR32O-xsx7en5Jr644o_WLtkNdtx2nECQQuTAReYClwcgxuCLKhIUsrlOguG4HGS-s"
// }
// var publicPEM = jwkToPem(jwk);
// console.log(publicPEM);

// var options = {"private" : true} //important this will set jwkToPem to output the private key
// var privatePEM = jwkToPem(jwk, options);
// console.log(privatePEM);