import FileSaver from 'file-saver'
import { surpriseMePrompts } from "../constants";

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) getRandomPrompts(prompt);

  return randomPrompt;
}

export async function downloadImg(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
