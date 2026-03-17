import { parse } from 'json5';

export function parseConfig(fileContent) {
  try {
    const config = parse(fileContent);
    return config;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON: ${error.message}`);
    } else {
      throw new Error(`Failed to parse configuration file: ${error.message}`);
    }
  }
}