//  basic file management

import { existsSync } from 'fs';
import { basename } from 'path';

export function getCurrentDirectoryBase() {
    return basename(process.cwd());
}
export function directoryExists(filePath) {
    return existsSync(filePath);
}