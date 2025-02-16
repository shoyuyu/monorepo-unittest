import { wait } from '../promise';

test('指定された時間の経過後に解決されます', async () => {
  const duration = 1000; // 1 second
  const result = await wait(duration);
  expect(result).toBe(duration);
});