// https://refactoring.guru/design-patterns/proxy
// Proxy is a structural design pattern that lets you provide a substitute or placeholder
//  for another object. A proxy controls access to the original object,
// allowing you to perform something either before or after the request gets through to the original object.

export interface IHttpRequest {
  request(): string;
}

class HttpRequest implements IHttpRequest {
  request() {
    return 'Ok';
  }
}

class HttpRequestProxy implements IHttpRequest {
  constructor(private httpRequest: HttpRequest) {}

  checkPermission(): boolean {
    const permission = Math.random();
    if (permission <= 0.5) {
      return true;
    }
    return false;
  }

  logger(permission: boolean): void {
    console.log('Logger: ', permission);
  }

  request(): string {
    const permission = this.checkPermission();
    this.logger(permission);
    if (permission) {
      return this.httpRequest.request();
    }
    return 'Error';
  }
}

const proxy = new HttpRequestProxy(new HttpRequest());
console.log(proxy.request());
