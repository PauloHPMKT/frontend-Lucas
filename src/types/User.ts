export interface User {
    id?: string;
    nome: string;
    email: string;
    senha: string;
    role: User.Roles;
    isActive: boolean;
    createdAt: Date;
}

export namespace User {
    export type Roles = 'admin' | 'operador';
}