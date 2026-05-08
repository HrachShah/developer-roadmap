import imageSize from 'image-size';
import { readFile } from 'node:fs/promises';

export async function getLocalImageDimensions(path: string) {
  try {
    const imageBuffer = await readFile(path);
    return imageSize(imageBuffer);
  } catch (error: Error) {
    console.error(error, error.stack);
    return null;
  }
}
