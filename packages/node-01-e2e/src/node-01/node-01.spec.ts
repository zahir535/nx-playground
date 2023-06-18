import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/packages/node-01');

    const output = execSync(`node ${cliPath}`).toString();

    expect(output).toMatch(/Hello World/);
  });
});
