export interface IUserDTO {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface IAdDTO {
    company: string;
    url: string;
    text: string;
}

export interface IUsersDTO {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUserDTO[];
    ad: IAdDTO;
}
