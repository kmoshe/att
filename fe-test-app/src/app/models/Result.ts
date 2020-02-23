import { Color } from './Color';
import { Error } from './Error';

export interface Result {
    color: Color;
    statusCode: number; 
    error: Error;
}