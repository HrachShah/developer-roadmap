import imageSize from 'image-size';
import { readFile } from 'node:fs/promises';

export async function getLocalImageDimensions(path: string) {
  try {
    const imageBuffer = await readFile(path);
    return imageSize(imageBuffer);
  } catch (error: unknown) {
    console.error(error, (error instanceof Error) ? error.stack : undefined);
    return null;
  }
}
