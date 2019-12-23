import { IApiAdapterService } from '../../interfaces/services/IApiAdapterService';

import axios, { AxiosInstance } from 'axios';

export class ApiAdapterService implements IApiAdapterService {
    initialize(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const apiAdapter: AxiosInstance = axios.create({ baseURL: url });
                resolve(apiAdapter);
            } catch(err) {
                reject(err);
            }
        });
    }
}