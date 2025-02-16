// 数値を返すPromiseを作成
export function wait(duration: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}