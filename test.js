// Minimal smoke test: run the CLI and check the generated JSON.
import assert from 'assert';
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const outName = 'test-build-info.json';
const outFile = path.join(dir, outName);

try {
    execFileSync('node', [
        path.join(dir, 'cli.js'),
        '--sha', 'abc123',
        '--build', '42',
        '--comment', 'test comment',
        '--author', 'tester',
        '--file', outName,
    ], { cwd: dir });

    const info = JSON.parse(fs.readFileSync(outFile, 'utf8'));
    assert.strictEqual(info.sha, 'abc123');
    assert.strictEqual(info.build, '42');
    assert.strictEqual(info.comment, 'test comment');
    assert.strictEqual(info.author, 'tester');
    assert.ok(!isNaN(Date.parse(info.buildTime)));

    console.log('ok');
} finally {
    fs.rmSync(outFile, { force: true });
}
