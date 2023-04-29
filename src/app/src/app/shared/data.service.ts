export class DataService {
  getDetails() {
    const resultPromise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data Service');
      }, 1500); 
    });
    return resultPromise;
  }
}
