type RegisterDto = {
    f6092f2c98078cc93a2a48b195dd128b: string,// User name
    ddf0d0321d6b7ce4d42f5183e525ef25: string,// Password
    a159f7900ac2a5cad10de7249dad1cdb: string,// Email credentials
}

type LoginDto = {
    f6092f2c98078cc93a2a48b195dd128b: Buffer,// User name
    ddf0d0321d6b7ce4d42f5183e525ef25: Buffer,// Password
}

type StoredCredentials = {
    f6092f2c98078cc93a2a48b195dd128b: string,// User credentials
    a159f7900ac2a5cad10de7249dad1cdb: string,// Email credentials
    bdc23f83f423692379db2f0e3bc6b3f1: string,// Auth Token
    be9b1c6ce2b2ba4d5bbd88adaba31524: string,// Refresh Token
    bdffb1fa7ef253198705da5ac384b380: string,// Claims Level
}
