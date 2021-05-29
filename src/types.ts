import { ReduxState, Record, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
    theme: ThemeName;
}

export interface Category extends Record {
    name: string;
}

export interface Product extends Record {
    name: string;
    description: string;
    created_at: number;
    end_data?: number;
}

export interface ProductType extends Record {
    product_type: string;
    description: string;
}

declare global {
    interface Window {
        // Todo: check if we want/need this
        restServer: any;
    }
}
