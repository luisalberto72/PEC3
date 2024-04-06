/**
 * @class Model
 *
 * Manages the data of the application.
 */
export class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({ text, complete }: { text: string, complete?: boolean } = { text: '', complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete!;
  }

  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
