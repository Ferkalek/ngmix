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

export interface IPageDTO<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[];
    ad: IAdDTO;
}

export interface IUserPageDTO extends IPageDTO<IUserDTO> {
    data: IUserDTO[];
}
