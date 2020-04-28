import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { GlobalHttpInterceptorService } from './global-http-interceptor.service';
import { BasicAuthHtppInterceptorService } from './services/basicauthhttpinterceptor.service';
import { ClearTokenInterceptor } from './services/cleartokeninterceptor.service';

export const interceptorProviders = 
   [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ClearTokenInterceptor, multi: true },
    
];